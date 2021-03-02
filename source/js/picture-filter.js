import _ from 'lodash';
import {renderPictures} from './picture-template.js';
import {getArrayWithUniqueNumbers} from './helpers/util.js';

const SORT_BY_RANDOM_PICTURES_QUANTITY = 10;
const THROTTLE_TIME = 500;
const FILTER_BUTTON_ACTIVE_CLASS = 'img-filters__button--active';

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
    clearActiveFilter();
    filterDefault.classList.add(FILTER_BUTTON_ACTIVE_CLASS);
  };

  const sortByRandom = () => {
    const sortRandomPictures = [];
    const uniqueNumbersArray = getArrayWithUniqueNumbers(pictures.length);

    for (let i = 0; i < uniqueNumbersArray.length; i++) {
      if (i < SORT_BY_RANDOM_PICTURES_QUANTITY) {
        let current = uniqueNumbersArray[i] - 1;
        sortRandomPictures.push(renderedPicturesByDefaultCopy[current])
      }
    }

    clearPictures();
    renderPictures(sortRandomPictures);
    clearActiveFilter();
    filterRandom.classList.add(FILTER_BUTTON_ACTIVE_CLASS);
  };

  const sortByDiscussed = () => {
    const sortByCommentsPictures = Object.assign([], renderedPicturesByDefaultCopy);

    sortByCommentsPictures.sort(function (a, b) {
      return b.comments.length - a.comments.length;
    });

    clearPictures();
    renderPictures(sortByCommentsPictures);
    clearActiveFilter();
    filterDiscussed.classList.add(FILTER_BUTTON_ACTIVE_CLASS);
  };

  // eslint-disable-next-line no-undef
  const sortByRandomThrottle = _.throttle(sortByRandom, THROTTLE_TIME);

  filterDefault.addEventListener('click', sortByDefault);
  filterRandom.addEventListener('click', sortByRandomThrottle);
  filterDiscussed.addEventListener('click', sortByDiscussed);

  const clearPictures = () => {
    const allPicturesList = document.querySelectorAll('.picture');
    for (let picture of allPicturesList) {
      picture.remove();
    }
  };

  const clearActiveFilter = () => {
    const imgFilters = document.querySelectorAll('.img-filters__button');
    for(let button of imgFilters) {
      button.classList.remove(FILTER_BUTTON_ACTIVE_CLASS)
    }
  };

};

export {pictureFilter}
