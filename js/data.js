const getDataArrayMiniatures = () =>{
  const DESCRIPTIONS = [
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

  const NAMES = [
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

  return { DESCRIPTIONS, COMMENTS, NAMES};
}


export { getDataArrayMiniatures };
