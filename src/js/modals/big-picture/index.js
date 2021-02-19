import {PICTURE_ID_ATTRIBUTE, KEY_CODE_ESC} from '../../constants.js';
import {setBigPictureData} from './set-big-picture-data.js';
import {setBigPictureComments} from './set-big-picture-comments.js';
import {openModal, closeModal} from '../../helpers/display-modal.js';

const renderBigPicture = (data) => {
  const pictureWrapper = document.querySelector('.pictures');
  const bigPicture = document.querySelector('.big-picture');
  const closeBigPictureModalButton = bigPicture.querySelector('#picture-cancel');

  const pictureEventListener = (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      evt.preventDefault();

      const targetPictureId = Number(evt.target.getAttribute(PICTURE_ID_ATTRIBUTE));
      const currentPictureData = data.find(picture => picture.id === targetPictureId);

      setBigPictureData(bigPicture, currentPictureData);
      setBigPictureComments(bigPicture, currentPictureData);
      openBigPictureModal();
    }
  };

  pictureWrapper.addEventListener('click', pictureEventListener);

  const openBigPictureModal = () => {
    openModal(bigPicture);

    // temporary code
    const bigPictureCommentCount = bigPicture.querySelector('.social__comment-count');
    bigPictureCommentCount.classList.add('hidden');
    const bigPictureCommentsLoader = bigPicture.querySelector('.comments-loader');
    bigPictureCommentsLoader.classList.add('hidden');
    //

    closeBigPictureModalButton.addEventListener('click', closeBigPictureModal);
    document.addEventListener('keydown', closeBigPictureModalByEscape);
  };

  const closeBigPictureModal = () => {
    closeModal(bigPicture);

    bigPicture.querySelector('.social__comments').innerHTML = '';

    closeBigPictureModalButton.removeEventListener('click', closeBigPictureModal);
    document.removeEventListener('keydown', closeBigPictureModalByEscape);
  };

  const closeBigPictureModalByEscape = (evt) => {
    if(evt.keyCode === KEY_CODE_ESC) {
      closeBigPictureModal();
    }
  };
};

export {renderBigPicture};
