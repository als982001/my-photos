export const SELECT = "SELECT";
export const IMAGE_FULL = "IMAGE_FULL";
export const IMG_PER_ROW = "IMG_PER_ROW";

export const handleSelectAlbumType = (key: string, value: boolean) => {
  return {
    type: SELECT,
    payload: {
      key,
      value,
    },
  };
};

export const handleImageFull = (isFull: boolean) => {
  return {
    type: IMAGE_FULL,
    payload: {
      isFull,
    },
  };
};

export const handleImgPerRow = (imgPerRow: number) => {
  const limitedImgPerRow = Math.max(1, Math.min(imgPerRow, 5));

  return {
    type: IMG_PER_ROW,
    payload: {
      imgPerRow: limitedImgPerRow,
    },
  };
};
