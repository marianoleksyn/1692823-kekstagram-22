import { getArrayWithUniqueNumbers, getRandomInteger } from './util.js'

const PICTURE_QUANTITY_GENERATE = 25;
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

const reservedCommentIds = [];
const getUniqueCommentId = () => {
  const current = reservedCommentIds.length + 1;
  reservedCommentIds.push(current);
  return current;
};

const createPictureIds = getArrayWithUniqueNumbers(PICTURE_QUANTITY_GENERATE);
const createPictureUrls = getArrayWithUniqueNumbers(PICTURE_QUANTITY_GENERATE);
const setPictureExample = (currentValue, index) => {
  return {
    id: createPictureIds[index],
    url: `photos/${createPictureUrls[index]}.jpg`,
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

// Generating pictures
const randomGeneratedPictures = new Array(PICTURE_QUANTITY_GENERATE)
  .fill({})
  .map((currentValue, index) => {
    return setPictureExample(currentValue, index)
  });

// Generating random comments for each picture
randomGeneratedPictures.forEach((picture) => {
  picture.comments = new Array(getRandomInteger(1, 4))
    .fill({})
    .map(() => setPictureExample().comments());
});

export { randomGeneratedPictures };
