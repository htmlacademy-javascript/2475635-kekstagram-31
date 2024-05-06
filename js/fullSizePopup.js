import { images, photos } from './thumbnails.js';
import { esc } from './util.js';

const bigPicture = document.querySelector('.big-picture'); // fullsize
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureCaption = bigPicture.querySelector('.social__caption');
const bigPictureCommentShownCount = bigPicture.querySelector('.social__comment-shown-count');
const bigPictureCommentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const bigPictureComments = bigPicture.querySelector('.social__comments');
const bigPictureCommentsCount = bigPicture.querySelector('.social__comment-count');
const bigPictureCommentsLoader = bigPicture.querySelector('.comments-loader');
const bigPicturecloseBtn = bigPicture.querySelector('.big-picture__cancel');

const closeByEsc = (evt) => {
  if (evt.keyCode === esc) {
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

function showBigPicture(photo) {
  bigPicture.classList.remove('hidden');
  bigPictureCommentsCount.classList.add('hidden');
  bigPictureCommentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');

  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.description;
  bigPictureCaption.textContent = photo.description;
  bigPictureLikesCount.textContent = photo.likes;
  bigPictureCommentTotalCount.textContent = photo.comments.length.toString();
  bigPictureCommentShownCount.textContent = (photo.comments.length <= 5 ? photo.comments.length : 5).toString();

  for (let i = 0; i < photo.comments.length; i++) {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    const commentAvatar = document.createElement('img');
    commentAvatar.classList.add('social__picture');
    commentAvatar.src = photo.comments[i].avatar;
    commentAvatar.alt = photo.comments[i].name;
    commentAvatar.width = 35;
    commentAvatar.height = 35;
    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = photo.comments[i].message;
    commentElement.appendChild(commentAvatar);
    commentElement.appendChild(commentText);
    bigPictureComments.appendChild(commentElement);
  }

  document.addEventListener('keydown', closeByEsc);
  bigPicture.addEventListener('click', closeBySideClick);

}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  bigPictureComments.textContent = '';
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', closeByEsc);


}

images.addEventListener('click', (evt) => {
  evt.preventDefault();
  const currentImg = evt.target.closest('.picture__img');
  if (currentImg) {
    photos.forEach((photo) => {
      showBigPicture(photo);
    });
  }
});


bigPicturecloseBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeBigPicture();
});
