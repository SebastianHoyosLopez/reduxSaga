import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
const sagaMiddleware = createSagaMiddleware();
const store = compose(  
  applyMiddleware(sagaMiddleware),
  //comment before upload code
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer);

export { store, sagaMiddleware };

