import { fork } from "redux-saga/effects";
import counter from "../components/Counter/Counter-saga";
import authorization from "../features/authorization/authorization-saga";
import register from "../features/register/register-saga";
import login from "../features/login/login-saga";

export default function* rootSaga() {
  yield fork(counter);
  yield fork(authorization);
  yield fork(register);
  yield fork(login);
}
