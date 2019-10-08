import { fork } from "redux-saga/effects";
import counter from "../components/Counter/Counter-saga";

export default function* rootSaga() {
  yield fork(counter);
}
