import {renderPictures} from './picture-template.js';
import {getArrayWithUniqueNumbers} from './helpers/util.js'

const SORT_BY_RANDOM_PICTURES_QUANTITY = 10;
const SORT_THROTTLE_TIME = 500;

const pictureFilter = (pictures) => {
  const imgFilters = document.querySelector('.img-filters');
  imgFilters.classList.remove('img-filters--inactive');

  const filterDefault = document.querySelector('#filter-default');
  const filterRandom = document.querySelector('#filter-random');
  const filterDiscussed = document.querySelector('#filter-discussed');

  const renderedPicturesByDefaultCopy = Object.assign([], pictures);

  const sortByDefault = () => {
    clearPictures();
    renderPictures(renderedPicturesByDefaultCopy);
  };

  const sortByRandom = () => {
    const sortRandomPictures = [];
    const uniqueNumbersArray = getArrayWithUniqueNumbers(pictures.length);

    for(let i = 0; i < uniqueNumbersArray.length; i++) {
      if(i < SORT_BY_RANDOM_PICTURES_QUANTITY) {
        let current = uniqueNumbersArray[i] - 1;
        sortRandomPictures.push(renderedPicturesByDefaultCopy[current])
      }
    }

    clearPictures();
    renderPictures(sortRandomPictures);
  };

  const sortByDiscussed = () => {
    const sortByCommentsPictures = Object.assign([], renderedPicturesByDefaultCopy);

    sortByCommentsPictures.sort(function (a, b) {
      return b.comments.length - a.comments.length;
    });

    clearPictures();
    renderPictures(sortByCommentsPictures);
  };

  // eslint-disable-next-line no-undef
  const sortByRandomThrottle = _.throttle(sortByRandom, SORT_THROTTLE_TIME);

  filterDefault.addEventListener('click', sortByDefault);
  filterRandom.addEventListener('click', sortByRandomThrottle);
  filterDiscussed.addEventListener('click', sortByDiscussed);

  const clearPictures = () => {
    const allPicturesList = document.querySelectorAll('.picture');
    for (let picture of allPicturesList) {
      picture.remove();
    }
  };

};

export {pictureFilter}
