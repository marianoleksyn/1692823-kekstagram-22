const setBigPictureData = (bigPicture, data) => {
  const bigPictureImg = bigPicture.querySelector('img');
  bigPictureImg.src = data.url;

  const bigPictureLikes = bigPicture.querySelector('.likes-count');
  bigPictureLikes.textContent = data.likes;

  const bigPictureComments = bigPicture.querySelector('.comments-count');
  bigPictureComments.textContent = data.comments.length;

  const bigPictureCaption = bigPicture.querySelector('.social__caption');
  bigPictureCaption.textContent = data.description;
};

export {setBigPictureData};
