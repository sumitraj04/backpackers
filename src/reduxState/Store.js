import { configureStore } from "@reduxjs/toolkit";
import { createRootReducer } from "./Reducer";
import createSagaMiddleware from "redux-saga";
import { rootSagas } from "../middlewareSaga/Saga";
const sagaMiddleware = createSagaMiddleware();

export function createStore() {
  return configureStore({
    reducer: createRootReducer(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
}

export const store = createStore();
sagaMiddleware.run(rootSagas)