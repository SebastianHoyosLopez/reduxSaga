import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["pokemonsReducer"],
};

import { createSagaMiddleware } from "@redux-saga/core";
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

export { store, sagaMiddleware };
