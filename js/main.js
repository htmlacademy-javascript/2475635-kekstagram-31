const PHOTO_DESCRIPTION = [
  'небо',
  'нормальная погодка',
  'завтрак',
  'обед',
  'ужин',
  'селфи',
  'с друзьями',
  'на тусовке',
  'в отпуске',
  'пляж'
];

const COMMENTS= [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const COMMENTATOR = [
  'Артем',
  'Антон',
  'Валентин',
  'Дмитрий',
  'Александр',
  'Никита',
  'Даня',
  'Евгения',
  'Анастасия',
  'Мирослава',
  'Максим'
];

const POST_COUNTER = 25;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomElement = (array) => array[getRandomNumber(0, array.length - 1)];

let CommentId = 0;
const createCommentId = () => {
  CommentId++;
  return CommentId;
};

let PhotoId = 0;
const createPhotoId = () => {
  PhotoId++;
  return PhotoId;
};

// создаем камент
const generateComment = () => {
  const id = createCommentId();
  const avatar = `img/avatar-${getRandomNumber(1, 6)}.svg`;
  const message = getRandomElement(COMMENTS);
  const name = getRandomElement(COMMENTATOR);

  return {
    id,
    avatar,
    message,
    name
  };
};
//создаем фото
const generatePhoto = () => {
  const id = createPhotoId();
  const url = `photos/${id}.jpg`;
  const description = getRandomElement(PHOTO_DESCRIPTION);
  const likes = getRandomNumber(15, 200);
  const comments = Array.from({ length: getRandomNumber(0, 30) }, generateComment);

  return {
    id,
    url,
    description,
    likes,
    comments
  };
};

const photos = Array.from({ length: POST_COUNTER }, generatePhoto);

