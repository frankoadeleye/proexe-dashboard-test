import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "redux/root-reducer";
import CombineSagas from "redux/root-saga";

const sagaMiddleware = createSagaMiddleware();

export const store =
  process.env.NODE_ENV === "production"
    ? createStore(rootReducer, applyMiddleware(sagaMiddleware))
    : createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(CombineSagas);
