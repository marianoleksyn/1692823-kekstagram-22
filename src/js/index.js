import {generateData} from './data.js';
import {renderPictures} from './picture-template.js';
import {renderBigPicture} from './modals/big-picture/index.js';
import {uploadFile} from './modals/upload-file/index.js'

const data = generateData(25);
renderPictures(data);
renderBigPicture(data);
uploadFile();
