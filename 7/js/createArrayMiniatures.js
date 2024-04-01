import { getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';
import { getDataArrayMiniatures } from "./data.js";


const OBJECT_COUNT = 25;
const { DESCRIPTIONS, COMMENTS, NAMES } = getDataArrayMiniatures();

const getPhotoId = createRandomIdFromRangeGenerator(1, 26);
const generateCommentId = createRandomIdFromRangeGenerator(1, 26);
const getNumberPhoto = createRandomIdFromRangeGenerator(1, 26);

const createComments = () =>({
  id:generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = () => ({
  id: getPhotoId(),
  url: `photos/${getNumberPhoto()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30) }, createComments),
});

const getArrayMiniatures = () =>
  Array.from({ length: OBJECT_COUNT}, createPhotoDescription);

  export { getArrayMiniatures};
