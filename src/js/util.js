const checkMaxStringLength = (string, maxLength) => {
  return string.length <= maxLength;
};

const getArrayWithUniqueNumbers = (quantity) => {
  const numbers = [];

  while (numbers.length < quantity) {
    const currentRandomInteger = getRandomInteger(1, quantity);
    if (!numbers.includes(currentRandomInteger)) {
      numbers.push(currentRandomInteger);
    }
  }

  return numbers;
};

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return Error('Arguments must be positive ("min" number can equal 0)');
  }
  if (min >= max) {
    return Error('The "max" number must be greater than "min" number');
  }

  return Math.floor(Math.random() * (Math.ceil(max) - Math.ceil(min) + 1)) + Math.ceil(min);
};

export {checkMaxStringLength, getArrayWithUniqueNumbers, getRandomInteger};
