import * as api from "./login-api";
import { loginUser, loginUserRequest } from "./login-actions";
import { loadUser } from "../authorization/authorization-actions";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { LoginUser } from "./login-model";

export function* handleLoginUser(loginData: any) {
  const { payload } = loginData;
  try {
    yield put(loginUserRequest.request());
    const response: LoginUser = yield call(api.loginUserInApplication, payload);
    yield put(loginUserRequest.success(response));
    yield put(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    //yield put(setAlert(errors))
    yield put(loginUserRequest.failure(err));
  }
}

export default function*() {
  yield all([takeLatest(getType(loginUser), handleLoginUser)]);
}
