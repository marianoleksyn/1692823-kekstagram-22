const uploadImageFile = (input, imagePreview, effectPreview) => {
  const FILE_TYPES = ['jpg', 'jpeg', 'png'];
  const file = input.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      imagePreview.src = reader.result;
      for (let preview of effectPreview) {
        preview.style.backgroundImage = `url(${reader.result})`;
      }
    });

    reader.readAsDataURL(file);
  }
};

export {uploadImageFile};
