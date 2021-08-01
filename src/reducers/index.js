import { combineReducers } from "redux";
import { tokenReducer } from "./tokenReducer";
import { authentication } from "./authenticationReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const allReducers = combineReducers({
  token: tokenReducer,
  authentication: authentication,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [authentication],
};

const rootReducer = (state, action) => {
  return allReducers(state, action);
};

export default persistReducer(persistConfig, rootReducer);
