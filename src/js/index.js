import {generateData} from './data.js';
import {renderPictures} from './picture-template.js';
import {renderBigPicture} from './big-picture/index.js';

const data = generateData(25);
renderPictures(data);
renderBigPicture(data);
