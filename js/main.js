'use strict';

const POST_QUANTITY_GENERATE = 25;
const COMMENTS = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Олег',
  'Андрей',
  'Максим',
  'Светлана',
  'Борис',
];

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return Error('Arguments must be positive ("min" number can equal 0)');
  }
  if (min >= max) {
    return Error('The "max" number must be greater than "min" number');
  }

  return Math.floor(Math.random() * (Math.ceil(max) - Math.ceil(min) + 1)) + Math.ceil(min);
};

const checkMaxStringLength = (string, maxLength) => {
  return string.length <= maxLength;
};

checkMaxStringLength('Some string', 80);

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

const reservedCommentIds = [];
const getUniqueCommentId = () => {
  const current = reservedCommentIds.length + 1;
  reservedCommentIds.push(current);
  return current;
};

const createPostIds = getArrayWithUniqueNumbers(POST_QUANTITY_GENERATE);
const createPostUrls = getArrayWithUniqueNumbers(POST_QUANTITY_GENERATE);
const setPostExample = (currentValue, index) => {
  return {
    id: createPostIds[index],
    url: `photos-${createPostUrls[index]}.jpg`,
    description: `Описание к фотографии #${index + 1}`,
    likes: getRandomInteger(15, 100),
    comments: () => {
      return {
        id: getUniqueCommentId(),
        avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
        message: COMMENTS[getRandomInteger(1, COMMENTS.length)],
        name: NAMES[getRandomInteger(1, NAMES.length)],
      }
    },
  };
};

// Generating posts
const randomGeneratedPosts = new Array(POST_QUANTITY_GENERATE)
  .fill({})
  .map((currentValue, index) => {
    return setPostExample(currentValue, index)
  });

// Generating random comments for each post
randomGeneratedPosts.forEach((post) => {
  post.comments = new Array(getRandomInteger(1, 4))
    .fill({})
    .map(() => setPostExample().comments());
});
