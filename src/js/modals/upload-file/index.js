import {KEY_CODE_ESC} from '../../constants.js';
import {openModal, closeModal} from '../../helpers/display-modal.js';
import {pictureScale} from './picture-scale.js'
import {pictureFilter} from './picture-filter.js'
import {uploadImageFile} from './upload-image-file.js';

const uploadFileInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeUploadModalButton = uploadOverlay.querySelector('#upload-cancel');
const imagePreviewWrapper = document.querySelector('.img-upload__preview');
const imagePreview = imagePreviewWrapper.querySelector('img');
const effectPreview = document.querySelectorAll('.effects__preview');

const uploadFile = () => {
  uploadFileInput.addEventListener('change', function () {

    uploadImageFile(uploadFileInput, imagePreview, effectPreview);
    openUploadModal();
  });
};

const openUploadModal = () => {
  openModal(uploadOverlay);

  pictureScale(imagePreview);
  pictureFilter(imagePreview);

  closeUploadModalButton.addEventListener('click', closeUploadModal);
  document.addEventListener('keydown', closeUploadModalByEscape);
};

const closeUploadModal = () => {
  closeModal(uploadOverlay);

  closeUploadModalButton.removeEventListener('click', closeUploadModal);
  document.removeEventListener('keydown', closeUploadModalByEscape);
};

const closeUploadModalByEscape = (evt) => {
  if (evt.keyCode === KEY_CODE_ESC) {
    closeUploadModal();
  }
};

export {uploadFile};
