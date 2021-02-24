import {displayValidationMsg} from '../../helpers/display-validation-msg';

const HASHTAGS_QUANTITY = 5;
const HASHTAG_MAX_LENGTH = 20;

const hashtagValidation = (hashtagInput) => {
  hashtagInput.addEventListener('input', function () {

    hashtagInput.value = hashtagInput.value
      .replace('  ', ' ');

    const hashtags = hashtagInput.value.split(' ').filter(function(item) {
      return item !== ''
    });

    checkHashtagLength(hashtagInput, hashtags);
    checkHashtagsQuantity(hashtagInput, hashtags);
    checkFirstSymbol(hashtagInput, hashtags);
    checkEmptyHashtag(hashtagInput);
    checkSpecialChar(hashtagInput, hashtags);
  });
};

const checkFirstSymbol = (hashtagInput, hashtags) => {
  let isFirstSymbolHashtag = false;
  for(let i = 0; i < hashtags.length; i++) {
    if (hashtags[i].charAt(0) !== '#') {
      isFirstSymbolHashtag = true;

      break;
    }
  }

  displayValidationMsg(
    'isFirstSymbolHashtag',
    isFirstSymbolHashtag,
    hashtagInput,
    'Хэш-тег должен начинается с символа # (решётка).',
  );
};

const checkHashtagsQuantity = (hashtagInput, hashtags) => {
  const isToMuchHashtags = hashtags.length > HASHTAGS_QUANTITY;
  displayValidationMsg(
    'isToMuchHashtags',
    isToMuchHashtags,
    hashtagInput,
    'Максимально допустимо 5 хэш-тегов.',
  );
};

const checkHashtagLength = (hashtagInput, hashtags) => {
  let isToMuchHashtagLength = false;
  for(let i = 0; i < hashtags.length; i++) {
    if(hashtags[i].length > HASHTAG_MAX_LENGTH) {
      isToMuchHashtagLength = true;
      break;
    }
  }

  displayValidationMsg(
    'isToMuchHashtagLength',
    isToMuchHashtagLength,
    hashtagInput,
    'Максимальна допустима длинна хэш-тега: 5 символов.',
  );
};

const checkEmptyHashtag = (hashtagInput) => {
  let isEmptyHashtag = false;
  const lastHashtagInputSymbol = hashtagInput.value[hashtagInput.value.length - 1];

  if (hashtagInput.value.includes('# ') || lastHashtagInputSymbol === '#' && hashtagInput.value.length > 1) {
    isEmptyHashtag = true;
  }

  displayValidationMsg(
    'checkEmptyHashtag',
    isEmptyHashtag,
    hashtagInput,
    'Хеш-тег не может состоять только из одной решётки.',
  );
};

const checkSpecialChar = (hashtagInput, hashtags) => {

  let hasSpecialChar = false;
  for(let i = 0; i < hashtags.length; i++) {
    console.log(hashtags[i]);

    for(let j = 1; j < hashtags[i].length; j++) {
      console.log(hashtags[i][j]);
      if (!/^[0-9A-Za-z]+$/.test(hashtags[i][j])) {
        hasSpecialChar = true;
        break;
      }
    }
  }

  displayValidationMsg(
    'hasSpecialChar',
    hasSpecialChar,
    hashtagInput,
    'Строка после решётки должна состоять из букв или чисел и не может содержать спецсимволы (#, @, $ и т. п.),',
  );
};

export {hashtagValidation};
