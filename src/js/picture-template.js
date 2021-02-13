import { randomGeneratedPictures } from './data.js';

const similarPicturesContainer = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarPicturesFragment = document.createDocumentFragment();

randomGeneratedPictures.forEach((picture) => {
  const pictureElement = similarPictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = String(picture.comments.length);

  similarPicturesFragment.appendChild(pictureElement);
});

similarPicturesContainer.appendChild(similarPicturesFragment);
