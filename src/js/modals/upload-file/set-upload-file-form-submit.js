import {sendData} from '../../api.js';
import {renderError, renderSuccess} from '../../helpers/display-form-msg.js';

const setUploadFileFormSubmit = (onSuccess, onFail) => {
  const uploadFileForm = document.querySelector('.img-upload__form');

  uploadFileForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => renderSuccess(onSuccess),
      () => renderError(onFail),
      new FormData(evt.target),
    );

    uploadFileForm.reset();
  });
};

export {setUploadFileFormSubmit};
