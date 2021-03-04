import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
import {HIDDEN_CLASS} from '../../constants.js';

const setPictureEffect = (imgPreview) => {

  const EFFECT_NONE = 'effect-none';
  const EFFECT_CHROME = 'effect-chrome';
  const EFFECT_SEPIA = 'effect-sepia';
  const EFFECT_MARVIN = 'effect-marvin';
  const EFFECT_PHOBOS = 'effect-phobos';
  const EFFECT_HEAT = 'effect-heat';

  const effectRadioInput = document.querySelectorAll('.effects__radio');
  const sliderWrapper = document.querySelector('.effect-level');
  const slider = sliderWrapper.querySelector('.effect-level__slider');
  const effectLevelValue = document.querySelector('.effect-level__value');

  if (slider.innerHTML === '') {
    noUiSlider.create(slider, {range: {min: 0, max: 1}, start: 0});
  }

  const configureEffectSliderSettings = (effectType, min, max, start, step) => {
    imgPreview.removeAttribute('class');
    sliderWrapper.classList.remove(HIDDEN_CLASS);

    const effectShortName = effectType.substr(7);
    imgPreview.classList.add(`effects__preview--${effectShortName}`);

    slider.noUiSlider.updateOptions({range: {min: min, max: max}, start: start, step: step});

    setEffectStyles(effectType)
  };

  const setEffectStyles = (effectType) => {
    slider.noUiSlider.on('update', (_, handle, unencoded) => {
      effectLevelValue.setAttribute('value', unencoded[handle]);

      switch (effectType) {
        case EFFECT_CHROME:
          imgPreview.style.filter = `grayscale(${unencoded[handle]})`;
          break;
        case EFFECT_SEPIA:
          imgPreview.style.filter = `sepia(${unencoded[handle]})`;
          break;
        case EFFECT_MARVIN:
          imgPreview.style.filter = `invert(${unencoded[handle]}%)`;
          break;
        case EFFECT_PHOBOS:
          imgPreview.style.filter = `blur(${unencoded[handle]}px`;
          break;
        case EFFECT_HEAT:
          imgPreview.style.filter = `brightness(${unencoded[handle]}`;
          break;
      }

    });
  };

  const setEffectSliderSettings = () => {
    for (let i = 0; i < effectRadioInput.length; i++) {
      if (effectRadioInput[i].checked) {

        switch (effectRadioInput[i].id) {
          case EFFECT_NONE:
            imgPreview.removeAttribute('class');
            imgPreview.style.filter = '';

            sliderWrapper.classList.add(HIDDEN_CLASS);
            break;

          case EFFECT_CHROME:
            configureEffectSliderSettings(EFFECT_CHROME, 0, 1, 1, 0.1);
            break;

          case EFFECT_SEPIA:
            configureEffectSliderSettings(EFFECT_SEPIA, 0, 1, 1, 0.1);
            break;

          case EFFECT_MARVIN:
            configureEffectSliderSettings(EFFECT_MARVIN, 0, 100, 100, 1);
            break;

          case EFFECT_PHOBOS:
            configureEffectSliderSettings(EFFECT_PHOBOS, 0, 3, 3, 0.1);
            break;

          case EFFECT_HEAT:
            configureEffectSliderSettings(EFFECT_HEAT, 1, 3, 3, 0.1);
            break;
        }
      }
    }
  };

  for (let i = 0; i < effectRadioInput.length; i++) {
    effectRadioInput[i].addEventListener('change', function () {
      setEffectSliderSettings();
    });
  }

  setEffectSliderSettings();

};

export {setPictureEffect};
