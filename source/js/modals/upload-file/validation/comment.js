import {checkMaxStringLength} from '../../../helpers/util.js';
import {displayValidationMsg} from '../../../helpers/display-validation-msg';

const TEXTAREA_MAX_LENGTH = 140;

const commentValidation = (commentTextarea) => {
  commentTextarea.addEventListener('input', function () {
    const isCommentTextareaValueLengthValid = checkMaxStringLength(commentTextarea.value, TEXTAREA_MAX_LENGTH);

    displayValidationMsg(
      'isCommentTextareaValueLengthValid',
      !isCommentTextareaValueLengthValid,
      commentTextarea,
      `Ваш коментарий содержыт больше ${TEXTAREA_MAX_LENGTH} символов. Уменьшите коментарий`,
    );

  });
};

export {commentValidation};
