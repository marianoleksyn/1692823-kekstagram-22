import {HIDDEN_CLASS, MODAL_OPEN_CLASS} from '../constants.js'

const body = document.querySelector('body');

const openModal = (modalOverlay) => {
  modalOverlay.classList.remove(HIDDEN_CLASS);
  body.classList.add(MODAL_OPEN_CLASS);
};

const closeModal = (modalOverlay) => {
  modalOverlay.classList.add(HIDDEN_CLASS);
  body.classList.remove(MODAL_OPEN_CLASS);
};

export {openModal, closeModal};
