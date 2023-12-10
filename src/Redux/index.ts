import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import albumSidebarReducer from "./Reducers/albumSidebarReducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["albumSidebarReducer"],
};

const rootReducer = combineReducers({ albumSidebarReducer });

export default persistReducer(persistConfig, rootReducer);
