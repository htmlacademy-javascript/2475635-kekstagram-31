import {getArrayMiniatures} from './createArrayMiniatures.js';

const images = document.querySelector('.pictures');

// делаем заголовок секции видимым
const imagesTitle = images.querySelector('.pictures__title');
imagesTitle.classList.remove('visually-hidden');

// получаем шаблон секции для вставки фотографий
const imageTemplate = document.querySelector('#picture').content.querySelector('.picture');

// вызываем функцию генерации фотографий
const photos = getArrayMiniatures();

// создаем фрагмент, в который сначала будем записывать фотографии
const photosFragment = document.createDocumentFragment();

// пробегаем циклом по каждой фотографии и добавляем нужные данные
photos.forEach((photo) => {
  const pictureElement = imageTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__img').alt = photo.description;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  // складываем фотографии во фрагмент
  photosFragment.append(pictureElement);
});

// из фрагмента отрисовываем фотографии на страницу
images.appendChild(photosFragment);
