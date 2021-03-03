const setCommentCount = (commentsContainer) => {
  const commentsLength = commentsContainer.childNodes.length;
  const commentsDisplayed = document.querySelector('.comments-displayed');

  commentsDisplayed.textContent = commentsLength;
};

export {setCommentCount};
