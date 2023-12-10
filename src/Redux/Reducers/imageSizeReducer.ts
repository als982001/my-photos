import { IMAGE_FULL, IMG_PER_ROW } from "../Actions";

interface IImageSize {
  isFull: boolean;
  imgPerRow: number;
}

const initialState: IImageSize = {
  isFull: false,
  imgPerRow: 1,
};

const imageSizeReducer = (state: IImageSize = initialState, actions: any) => {
  switch (actions.type) {
    case IMAGE_FULL:
      return { ...state, isFull: actions.payload.isFull };
    case IMG_PER_ROW:
      return { ...state, imgPerRow: actions.payload.imgPerRow };
    default:
      return state;
  }
};

export default imageSizeReducer;
