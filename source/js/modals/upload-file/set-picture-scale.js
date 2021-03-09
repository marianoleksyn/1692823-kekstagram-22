const setPictureScale = (imagePreview) => {

  const MAX_SCALE_VALUE = 100;
  const STEP_SCALE_VALUE = 25;
  const scaleEnlargeButton = document.querySelector('.scale__control--bigger');
  const scaleReduceButton = document.querySelector('.scale__control--smaller');
  const scaleInputValue = document.querySelector('.scale__control--value');

  imagePreview.style.transform = '';

  let scaleValue = MAX_SCALE_VALUE;
  scaleInputValue.value = scaleValue + '%';

  scaleEnlargeButton.addEventListener('click', function () {
    if (scaleValue !== MAX_SCALE_VALUE) {
      scaleValue += STEP_SCALE_VALUE;

      scaleInputValue.value = scaleValue + '%';
      changeImgPreviewScale(scaleValue);
    }
  });

  scaleReduceButton.addEventListener('click', function () {
    if (scaleValue !== STEP_SCALE_VALUE) {
      scaleValue -= STEP_SCALE_VALUE;

      scaleInputValue.value = scaleValue + '%';
      changeImgPreviewScale(scaleValue);
    }
  });

  const changeImgPreviewScale = (scaleValue) => {
    if (scaleValue === MAX_SCALE_VALUE) {
      imagePreview.style.transform = 'scale(1)';
    } else {
      imagePreview.style.transform = `scale(0.${scaleValue})`;
    }
  }

};

export {setPictureScale};
