const setBigPictureComments = (bigPicture, data) => {
  const commentsContainer = bigPicture.querySelector('.social__comments');

  const similarCommentTemplate = document.querySelector('#social-comment-template').content.querySelector('.social__comment');
  const similarCommentsFragment = document.createDocumentFragment();

  data.comments.forEach((comment) => {
    const commentElement = similarCommentTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;

    similarCommentsFragment.appendChild(commentElement);
  });

  commentsContainer.appendChild(similarCommentsFragment);

};

export {setBigPictureComments};
