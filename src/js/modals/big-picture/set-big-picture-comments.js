import {HIDDEN_CLASS} from '../../constants.js';

const COMMENTS_DISPLAY = 5;

const setBigPictureComments = (bigPicture, data) => {
  const commentsContainer = bigPicture.querySelector('.social__comments');
  const bigPictureCommentsLoader = bigPicture.querySelector('.comments-loader');

  const commentsCopy = Object.assign([], data.comments);

  const renderComment = (comment) => {
    const similarCommentTemplate = document.querySelector('#social-comment-template').content.querySelector('.social__comment');
    const similarCommentsFragment = document.createDocumentFragment();

    const commentElement = similarCommentTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;

    similarCommentsFragment.appendChild(commentElement);
    commentsContainer.appendChild(similarCommentsFragment);
  };

  let restComments = [];

  const commentLoaderListener = () => {
    renderPartComment(restComments);
  };

  const renderPartComment = (comments) => {
    restComments = [];

    if(comments.length > COMMENTS_DISPLAY) {
      bigPictureCommentsLoader.classList.remove(HIDDEN_CLASS);
      bigPictureCommentsLoader.addEventListener('click', commentLoaderListener);
    } else {
      bigPictureCommentsLoader.classList.add(HIDDEN_CLASS);
      bigPictureCommentsLoader.removeEventListener('click', commentLoaderListener);
    }

    for(let i = 0; i < comments.length; i++) {
      if(i < COMMENTS_DISPLAY) {
        renderComment(comments[i]);
      } else {
        restComments.push(comments[i]);
      }
    }
  };

  renderPartComment(commentsCopy);
};

export {setBigPictureComments};
