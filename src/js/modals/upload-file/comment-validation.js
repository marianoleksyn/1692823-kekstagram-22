import {checkMaxStringLength} from '../../helpers/util.js';

const TEXTAREA_MAX_LENGTH = 140;

const commentValidation = () => {
  const commentTextarea = document.querySelector('.text__description');

  commentTextarea.addEventListener('input', function () {
    const isCommentTextareaValueLengthValid = checkMaxStringLength(commentTextarea.value, TEXTAREA_MAX_LENGTH);

    displayValidationMsg(
      isCommentTextareaValueLengthValid,
      commentTextarea,
      `Ваш коментарий содержыт больше ${TEXTAREA_MAX_LENGTH} символов. Уменьшите коментарий`,
    );

  });

};

const displayValidationMsg = (condition, element, msg) => {

  const formSubmitButton = element.closest('form').querySelector('button[type="submit"]');

  if (!condition) {

    if(!element.classList.contains('not-valid')) {
      element.insertAdjacentHTML('afterend', '<div class="error-msg"></div>');
      element.nextSibling.textContent = msg;
    }

    element.classList.add('not-valid');
    formSubmitButton.setAttribute('disabled', '');

  } else {

    element.classList.remove('not-valid');
    formSubmitButton.removeAttribute('disabled');

    if(element.nextSibling) {
      element.nextSibling.remove();
    }

  }
};

export {commentValidation};
