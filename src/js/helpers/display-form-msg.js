import {KEY_CODE_ESC} from '../constants.js';

const main = document.querySelector('main');

const renderSuccess = (onSuccess) => {
  onSuccess();

  const successMsgTemplate = document.querySelector('#success').content.querySelector('.success');
  const successMsgElement = successMsgTemplate.cloneNode(true);

  main.appendChild(successMsgElement);

  const successButton = document.querySelector('.success__button');
  const successOverlay = document.querySelector('.success__overlay');

  successButton.addEventListener('click', closeSuccessPopup);
  successOverlay.addEventListener('click', closeSuccessPopup);
  document.addEventListener('keydown', closeSuccessPopupByEscape);
};

const closeSuccessPopup = () => {
  const successPopup = main.querySelector('.success');
  successPopup.remove();
};

const closeSuccessPopupByEscape = (evt) => {
  if(evt.keyCode === KEY_CODE_ESC) {
    closeSuccessPopup();
  }
};

const renderError = (onFail) => {
  onFail();

  const errorMsgTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorMsgElement = errorMsgTemplate.cloneNode(true);

  main.appendChild(errorMsgElement);

  const errorButton = document.querySelector('.error__button');
  const errorOverlay = document.querySelector('.error__overlay');

  errorButton.addEventListener('click', closeErrorPopup);
  errorOverlay.addEventListener('click', closeErrorPopup);
  document.addEventListener('keydown', closeErrorPopupByEscape);
};

const closeErrorPopup = () => {
  const errorPopup = main.querySelector('.error');
  errorPopup.remove();
};

const closeErrorPopupByEscape = (evt) => {
  if(evt.keyCode === KEY_CODE_ESC) {
    closeErrorPopup();
  }
};

export {renderSuccess, renderError};
