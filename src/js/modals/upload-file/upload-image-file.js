const uploadImageFile = (input, imagePreview, effectPreview) => {
  const file = input.files;
  if (input.files.length > 0) {
    const fileReader = new FileReader();

    fileReader.onload = function (event) {
      imagePreview.src = event.target.result;
      for (let i = 0; i < effectPreview.length; i++) {
        effectPreview[i].style.backgroundImage = `url(${event.target.result})`;
      }
    };

    fileReader.readAsDataURL(file[0]);
  }
};

export {uploadImageFile};
