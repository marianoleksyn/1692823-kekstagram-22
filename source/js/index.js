import {getData} from './api.js';
import {renderPictures} from './render-template.js';
import {renderBigPicture} from './modals/big-picture/index.js';
import {uploadFile} from './modals/upload-file/index.js';
import {setPictureFilter} from './set-picture-filter.js';

getData((pictures) => {
  renderPictures(pictures);
  setPictureFilter(pictures);
  renderBigPicture(pictures);
});

uploadFile();
