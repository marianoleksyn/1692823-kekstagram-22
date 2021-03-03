import {KEY_CODE_ESC} from '../../constants.js';
import {openModal, closeModal} from '../../helpers/display-modal.js';
import {resetValidation} from '../../helpers/display-validation-msg.js';
import {setPictureScale} from './set-picture-scale.js'
import {setPictureEffect} from './set-picture-effect.js'
import {uploadImageFile} from './upload-image-file.js';
import {commentValidation} from './validation/comment.js';
import {hashTagValidation} from './validation/hashtags.js';
import {setUploadFileFormSubmit} from './set-upload-file-form-submit.js';

const uploadFileInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeUploadModalButton = uploadOverlay.querySelector('#upload-cancel');
const imagePreviewWrapper = document.querySelector('.img-upload__preview');
const imagePreview = imagePreviewWrapper.querySelector('img');
const effectPreview = document.querySelectorAll('.effects__preview');
const commentTextarea = document.querySelector('.text__description');
const hashTagInput = document.querySelector('.text__hashtags');
const elementsBlockingEsc = [commentTextarea, hashTagInput];

const uploadFile = () => {
  uploadFileInput.addEventListener('change', function () {
    uploadImageFile(uploadFileInput, imagePreview, effectPreview);
    openUploadModal();
  });
};

const openUploadModal = () => {
  openModal(uploadOverlay);

  setPictureScale(imagePreview);
  setPictureEffect(imagePreview);
  commentValidation(commentTextarea);
  hashTagValidation(hashTagInput);

  closeUploadModalButton.addEventListener('click', closeUploadModal);
  document.addEventListener('keydown', closeUploadModalByEscape);
};

const closeUploadModal = () => {
  closeModal(uploadOverlay);
  resetValidation();

  closeUploadModalButton.removeEventListener('click', closeUploadModal);
  document.removeEventListener('keydown', closeUploadModalByEscape);
};

for (let i = 0; i < elementsBlockingEsc.length; i++) {
  elementsBlockingEsc[i].addEventListener('focus', function () {
    document.removeEventListener('keydown', closeUploadModalByEscape);
  });
  elementsBlockingEsc[i].addEventListener('blur', function () {
    document.addEventListener('keydown', closeUploadModalByEscape);
  });
}

const closeUploadModalByEscape = (evt) => {
  if (evt.keyCode === KEY_CODE_ESC) {
    closeUploadModal();
  }
};

setUploadFileFormSubmit(closeUploadModal, closeUploadModal);

export {uploadFile};
