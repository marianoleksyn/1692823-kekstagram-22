const ERROR_MSG_CLASS = 'error-msg';
const NOT_VALID_CLASS = 'not-valid';
const DISABLED_BTN_ATTR = 'disabled';

const displayValidationMsg = (validationName, condition, element, msg) => {

  const formSubmitButton = element.closest('form').querySelector('button[type="submit"]');
  const currentvalidationClass = `${ERROR_MSG_CLASS}--${validationName}`;

  const errorMsg = document.querySelector(`.${currentvalidationClass}`);

  if(errorMsg) {
    errorMsg.remove();

    element.classList.remove(NOT_VALID_CLASS);
    formSubmitButton.removeAttribute(DISABLED_BTN_ATTR);
  }

  if (condition) {
    element.classList.add(NOT_VALID_CLASS);
    formSubmitButton.setAttribute(DISABLED_BTN_ATTR, '');

    element.insertAdjacentHTML('afterend', `<div class="${currentvalidationClass}">${msg}</div>`);
  }

};

export {displayValidationMsg};
