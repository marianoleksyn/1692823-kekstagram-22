import {PICTURE_ID_ATTRIBUTE} from '../constants.js';
import {setBigPictureData} from './set-big-picture-data.js';
import {setBigPictureComments} from './set-big-picture-comments.js';

const HIDDEN_CLASS = 'hidden';
const MODAL_OPEN_CLASS = 'modal-open';

const renderBigPicture = (data) => {

  const body = document.querySelector('body');
  const pictureWrapper = document.querySelector('.pictures');
  const bigPicture = document.querySelector('.big-picture');
  const closeBigPictureModalButton = bigPicture.querySelector('#picture-cancel');

  const openBigPictureModal = () => {
    bigPicture.classList.remove(HIDDEN_CLASS);
    body.classList.add(MODAL_OPEN_CLASS);

    const bigPictureCommentCount = bigPicture.querySelector('.social__comment-count');
    bigPictureCommentCount.classList.add(HIDDEN_CLASS);
    const bigPictureCommentsLoader = bigPicture.querySelector('.comments-loader');
    bigPictureCommentsLoader.classList.add(HIDDEN_CLASS);

    closeBigPictureModalButton.addEventListener('click', closeBigPictureModal);
    pictureWrapper.removeEventListener('click', pictureEventListener);
  };

  const pictureEventListener = (evt) => {
    evt.preventDefault();

    if (evt.target.classList.contains('picture__img')) {
      const targetPictureId = Number(evt.target.getAttribute(PICTURE_ID_ATTRIBUTE));
      const currentPictureData = data.find(picture => picture.id === targetPictureId);

      setBigPictureData(bigPicture, currentPictureData);
      setBigPictureComments(bigPicture, currentPictureData);
      openBigPictureModal();
    }
  };

  pictureWrapper.addEventListener('click', pictureEventListener);

  const closeBigPictureModal = () => {
    body.classList.remove(MODAL_OPEN_CLASS);
    bigPicture.classList.add(HIDDEN_CLASS);

    bigPicture.querySelector('.social__comments').innerHTML = '';

    closeBigPictureModalButton.removeEventListener('click', closeBigPictureModal);
    pictureWrapper.addEventListener('click', pictureEventListener);
  };

};

export {renderBigPicture};
