import { spawn } from "redux-saga/effects";
import BuddhaJourneySaga from "./BuddhaJourneySaga";

export function* rootSagas() {
  yield spawn(BuddhaJourneySaga);
}
