import { images, photos } from './thumbnails.js';
import { checkForEsc } from './util.js';

const bigPicture = document.querySelector('.big-picture'); // секция полноэкранного показа изображения
const bigPictureImg = bigPicture.querySelector('.big-picture__img img'); // большое изображение
const bigPictureLikesCount = bigPicture.querySelector('.likes-count'); // количество лайков на большом изображении
const bigPictureCaption = bigPicture.querySelector('.social__caption'); // подпись на большом изображении
const bigPictureCommentShownCount = bigPicture.querySelector('.social__comment-shown-count'); // количество показанных комментариев на большом изображении
const bigPictureCommentTotalCount = bigPicture.querySelector('.social__comment-total-count'); // количество всех комментариев на большом изображении
const bigPictureCommentsList = bigPicture.querySelector('.social__comments'); // количество всех комментариев на большом изображении
const bigPictureLoadMoreButton = bigPicture.querySelector('.comments-loader'); // блок загрузки новых комментариев
const closePicBtn = bigPicture.querySelector('.big-picture__cancel'); // крестик закрытия на большом изображении

// обработчик нажатия клавиши Esc
const closbyEsc = (evt) => {
  if (checkForEsc(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const closeBySideClick = (evt) => {
  if (evt.target === evt.currentTarget) {
    evt.preventDefault();
    closeBigPicture();
  }
};
let onBigPictureLoadMoreButton; // переменная для обработчика нажатия "Загрузить еще"
let shownCommentsCount = 0; // количество комментариев, которые были добавлены в последний раз

// функция для добавления комментариев
const addComments = (photo) => {
  const totalCommentsCount = photo.comments.length;
  const commentsToShow = photo.comments.slice(shownCommentsCount, shownCommentsCount + 5);

  // создаем комментарии
  commentsToShow.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    const commentAvatar = document.createElement('img');
    commentAvatar.classList.add('social__picture');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentAvatar.width = 35;
    commentAvatar.height = 35;
    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = comment.message;
    commentElement.appendChild(commentAvatar);
    commentElement.appendChild(commentText);
    bigPictureCommentsList.appendChild(commentElement);
  });

  shownCommentsCount += commentsToShow.length;
  bigPictureCommentShownCount.textContent = shownCommentsCount.toString();

  if (shownCommentsCount >= totalCommentsCount) {
    bigPictureLoadMoreButton.classList.add('hidden');
  } else {
    bigPictureLoadMoreButton.classList.remove('hidden');
  }
};

// функция открывает большое изображение, создает комментарии и добавляет обработчик нажатия клавиши Esc для закрытия большого изображения
const showBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.description;
  bigPictureCaption.textContent = photo.description;
  bigPictureLikesCount.textContent = photo.likes;
  bigPictureCommentTotalCount.textContent = photo.comments.length.toString();

  onBigPictureLoadMoreButton = () => {
    addComments(photo);
  };

  addComments(photo); // добавляем первые 5 комментариев
  bigPictureLoadMoreButton.addEventListener('click', onBigPictureLoadMoreButton); // обработчик нажатия на кнопку "Загрузить ещё"
  document.addEventListener('keydown', closbyEsc); // закрывает окно с большой картинкой по нажатию клавиши Esc
  bigPicture.addEventListener('click', closeBySideClick);
};

// функция скрывает большое изображение и очищает комментарии
const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  bigPictureCommentsList.textContent = '';
  document.body.classList.remove('modal-open');
  bigPictureLoadMoreButton.removeEventListener('click', onBigPictureLoadMoreButton); // удаляем обработчик нажатия на кнопку "Загрузить ещё"
  document.removeEventListener('keydown', closbyEsc); // удаляем обработчик нажатия клавиши Esc
  bigPicture.removeEventListener('click', closeBySideClick);
  shownCommentsCount = 0;
};

// открывает окно с большой картинкой по нажатию на превью
images.addEventListener('click', (evt) => {
  evt.preventDefault();
  const targetPicture = evt.target.closest('.picture__img') ;
  if (targetPicture )  {
    photos.forEach((photo) => {
      if (evt.target.src.endsWith(photo.url)) {
        showBigPicture(photo);
      }
    });
  }
});

// закрывает окно с большой картинкой по нажатию на x
closePicBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeBigPicture();
});
