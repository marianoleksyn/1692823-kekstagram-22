'use strict';

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return Error('Arguments must be positive ("min" number can equal 0)');
  }
  if (min >= max ) {
    return Error('The "max" number must be greater than "min" number' );
  }

  return Math.floor(Math.random() * (Math.ceil(max) - Math.ceil(min))) + Math.ceil(min);
};

getRandomInteger(1, 5);

const checkMaxStringLength = (string, maxLength) => {
  return string.length <= maxLength;
};

checkMaxStringLength('Some string', 80);
