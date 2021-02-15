import {getArrayWithUniqueNumbers, getRandomInteger} from './util.js'

const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Олег', 'Андрей', 'Максим', 'Светлана', 'Борис'];

const generateData = (quantity, minComments = 2, maxComments = 4) => {

  const reservedCommentIds = [];
  const getUniqueCommentId = () => {
    const current = reservedCommentIds.length + 1;
    reservedCommentIds.push(current);
    return current;
  };

  const createPictureIds = getArrayWithUniqueNumbers(quantity);
  const createPictureUrls = getArrayWithUniqueNumbers(quantity);
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
          message: COMMENTS[getRandomInteger(1, COMMENTS.length - 1)],
          name: NAMES[getRandomInteger(1, NAMES.length - 1)],
        }
      },
    };
  };

  // Generating pictures
  const randomGeneratedPictures = new Array(quantity)
    .fill({})
    .map((currentValue, index) => {
      return setPictureExample(currentValue, index)
    });

  // Generating random comments for each picture
  randomGeneratedPictures.forEach((picture) => {
    picture.comments = new Array(getRandomInteger(minComments, maxComments))
      .fill({})
      .map(() => setPictureExample().comments());
  });

  return randomGeneratedPictures
};

export {generateData};
