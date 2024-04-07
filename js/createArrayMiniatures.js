import { getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';
import { getDataArrayMiniatures } from "./data.js";


const OBJECT_COUNT = 25;
const { DESCRIPTIONS, COMMENTS, NAMES } = getDataArrayMiniatures();

const initId = () => {
  let id = 0;
  // функция получения  Id
  return function () {
    id++;
    return id;
  };
};


const getNextCommentId = initId();
const getNextPhotoId = initId();


const createComments = () => {
  const id = getNextCommentId();
  const avatar = `img/avatar-${getRandomInteger(1, 6)}.svg`;
  const message = getRandomArrayElement(COMMENTS);
  const name = getRandomArrayElement(NAMES);

  return {
    id,
    avatar,
    message,
    name
  };
};

// функция, которая будет создавать объект с описанием фотографии
const createPhotoDescription = () => {
  const id = getNextPhotoId();
  const url = `photos/${id}.jpg`;
  const description = getRandomArrayElement(DESCRIPTIONS);
  const likes = getRandomInteger(15, 200);
  const comments = Array.from({ length: getRandomInteger(0, 30) }, createComments);

  return {
    id,
    url,
    description,
    likes,
    comments
  };
};


const getArrayMiniatures = () =>
  Array.from({ length: OBJECT_COUNT}, createPhotoDescription);

  export { getArrayMiniatures};
