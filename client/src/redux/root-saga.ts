import { fork } from "redux-saga/effects";
import counter from "../components/Counter/Counter-saga";
import authorization from "../features/authorization/authorization-saga";

export default function* rootSaga() {
  yield fork(counter);
  yield fork(authorization);
}
