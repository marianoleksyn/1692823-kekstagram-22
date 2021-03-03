import {displayValidationMsg} from '../../../helpers/display-validation-msg';

const HASH_TAGS_QUANTITY = 5;
const HASH_TAG_MAX_LENGTH = 20;

const hashTagValidation = (hashTagInput) => {
  hashTagInput.addEventListener('input', function () {

    hashTagInput.value = hashTagInput.value
      .replace('  ', ' ');

    const hashTags = hashTagInput.value.toLowerCase().split(' ').filter(function(item) {
      return item !== ''
    });

    checkHashTagLength(hashTagInput, hashTags);
    checkHashTagsQuantity(hashTagInput, hashTags);
    checkFirstSymbol(hashTagInput, hashTags);
    checkEmptyHashTag(hashTagInput);
    checkSpecialChar(hashTagInput, hashTags);
    checkIfDuplicateExists(hashTagInput, hashTags);

  });
};

const checkFirstSymbol = (hashTagInput, hashTags) => {
  let isFirstSymbolHashTag = false;
  for(let i = 0; i < hashTags.length; i++) {
    if (hashTags[i].charAt(0) !== '#') {
      isFirstSymbolHashTag = true;

      break;
    }
  }

  displayValidationMsg(
    'isFirstSymbolHashTag',
    isFirstSymbolHashTag,
    hashTagInput,
    'Хэш-тег должен начинается с символа # (решётка).',
  );
};

const checkHashTagsQuantity = (hashTagInput, hashTags) => {
  const isToMuchHashTags = hashTags.length > HASH_TAGS_QUANTITY;
  displayValidationMsg(
    'isToMuchHashTags',
    isToMuchHashTags,
    hashTagInput,
    'Максимально допустимо 5 хэш-тегов.',
  );
};

const checkHashTagLength = (hashTagInput, hashTags) => {
  let isToMuchHashTagLength = false;
  for(let i = 0; i < hashTags.length; i++) {
    if(hashTags[i].length > HASH_TAG_MAX_LENGTH) {
      isToMuchHashTagLength = true;
      break;
    }
  }

  displayValidationMsg(
    'isToMuchHashTagLength',
    isToMuchHashTagLength,
    hashTagInput,
    `Максимальна допустима длинна хэш-тега: ${HASH_TAG_MAX_LENGTH} символов.`,
  );
};

const checkEmptyHashTag = (hashTagInput) => {
  let isEmptyHashTag = false;
  const lastHashTagInputSymbol = hashTagInput.value[hashTagInput.value.length - 1];
  const secondLastHashTagInputSymbol = hashTagInput.value[hashTagInput.value.length - 2];

  if (hashTagInput.value === '#' || hashTagInput.value.includes('# ') || (lastHashTagInputSymbol === '#' && secondLastHashTagInputSymbol === ' ')) {
    isEmptyHashTag = true;
  }

  displayValidationMsg(
    'checkEmptyHashTag',
    isEmptyHashTag,
    hashTagInput,
    'Хеш-тег не может состоять только из одной решётки.',
  );
};

const checkSpecialChar = (hashTagInput, hashTags) => {

  let hasSpecialChar = false;
  for(let i = 0; i < hashTags.length; i++) {

    for(let j = 1; j < hashTags[i].length; j++) {
      if (!/^[0-9A-Za-z]+$/.test(hashTags[i][j])) {
        hasSpecialChar = true;
        break;
      }
    }
  }

  displayValidationMsg(
    'hasSpecialChar',
    hasSpecialChar,
    hashTagInput,
    'Строка после решётки должна состоять из букв или чисел и не может содержать спецсимволы (#, @, $ и т. п.).',
  );
};

const checkIfDuplicateExists = (hashTagInput, hashTags) => {
  const duplicateInclude = new Set(hashTags).size !== hashTags.length;

  displayValidationMsg(
    'checkIfDuplicate',
    duplicateInclude,
    hashTagInput,
    'Один и тот же хэш-тег не может быть использован дважды.',
  );
};

export {hashTagValidation};
