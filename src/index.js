import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { logger } from "./redux/middlewares/index";
import { Provider } from "react-redux";
import { applyMiddleware, compose, legacy_createStore as createStore, } from "redux";
import { pokemonsReducer } from "./redux/modules/pokemons/reducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './redux/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger, sagaMiddleware));

const store = createStore(pokemonsReducer, composedEnhancers);

sagaMiddleware.run(rootSaga)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
