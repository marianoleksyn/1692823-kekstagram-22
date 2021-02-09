import { getRandomInteger } from './get-random-integer.js';

const getArrayWithUniqueNumbers = (quantity) => {
  const numbers = [];

  while (numbers.length < quantity) {
    const currentRandomInteger = getRandomInteger(1, quantity + 1);
    if (!numbers.includes(currentRandomInteger)) {
      numbers.push(currentRandomInteger);
    }
  }

  return numbers;
};

export { getArrayWithUniqueNumbers };
