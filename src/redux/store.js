//configureStore.js
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["auth", "app"],
// };

// const persistedReducer = persistReducer(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = compose(
  rootReducer,
  applyMiddleware(sagaMiddleware),
  //comment before upload code
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

export { store, sagaMiddleware };

