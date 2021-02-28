import {getData} from './api.js';
import {renderPictures} from './picture-template.js';
import {renderBigPicture} from './modals/big-picture/index.js';
import {uploadFile} from './modals/upload-file/index.js';

getData((pictures) => {
  renderPictures(pictures);
  renderBigPicture(pictures);
});

uploadFile();
