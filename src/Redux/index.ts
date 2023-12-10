import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import albumSidebarReducer from "./Reducers/albumSidebarReducer";
import imageSizeReducer from "./Reducers/imageSizeReducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["albumSidebarReducer"],
};

const rootReducer = combineReducers({ albumSidebarReducer, imageSizeReducer });

export default persistReducer(persistConfig, rootReducer);
