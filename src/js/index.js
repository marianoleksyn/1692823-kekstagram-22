import {getData} from './api.js';
import {renderPictures} from './picture-template.js';
import {renderBigPicture} from './modals/big-picture/index.js';
import {uploadFile} from './modals/upload-file/index.js';
import {pictureFilter} from './picture-filter.js';

getData((pictures) => {
  renderPictures(pictures);
  pictureFilter(pictures);
  renderBigPicture(pictures);
});

uploadFile();
