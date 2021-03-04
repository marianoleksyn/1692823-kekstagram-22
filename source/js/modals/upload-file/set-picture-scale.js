const setPictureScale = (imagePreview) => {

  const scaleEnlargeButton = document.querySelector('.scale__control--bigger');
  const scaleReduceButton = document.querySelector('.scale__control--smaller');
  const scaleInputValue = document.querySelector('.scale__control--value');

  imagePreview.style.transform = '';

  let scaleValue = 100;
  scaleInputValue.value = scaleValue + '%';

  scaleEnlargeButton.addEventListener('click', function () {
    if (scaleValue !== 100) {
      scaleValue += 25;

      scaleInputValue.value = scaleValue + '%';
      changeImgPreviewScale(scaleValue);
    }
  });

  scaleReduceButton.addEventListener('click', function () {
    if (scaleValue !== 25) {
      scaleValue -= 25;

      scaleInputValue.value = scaleValue + '%';
      changeImgPreviewScale(scaleValue);
    }
  });

  const changeImgPreviewScale = (scaleValue) => {
    if (scaleValue === 100) {
      imagePreview.style.transform = 'scale(1)';
    } else {
      imagePreview.style.transform = `scale(0.${scaleValue})`;
    }
  }

};

export {setPictureScale};
