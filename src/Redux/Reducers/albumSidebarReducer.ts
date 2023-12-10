import { SELECT } from "../Actions";
import { IAlbumSidebar } from "../../utils/types";

const initialState: IAlbumSidebar = {
  mediatype: false,
  shared: false,
  myalbum: false,
};

const albumSidebarReducer = (
  state: IAlbumSidebar = initialState,
  actions: any
) => {
  console.log(actions);
  switch (actions.type) {
    case SELECT:
      return { ...state, [actions.payload.key]: actions.payload.value };
    default:
      return state;
  }
};

export default albumSidebarReducer;
