import * as api from "./register-api";
import { registerUser, registerUserRequest } from "./register-actions";
import { loadUser } from "../authorization/authorization-actions";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { RegisterUser } from "./register-model";

export function* handleRegisterUser(registrationData:any) {
  const { payload } = registrationData;
  try {
    yield put(registerUserRequest.request());
    const response: RegisterUser = yield call(api.registerUserInDatabase, payload);
    yield put(registerUserRequest.success(response));
    yield put(loadUser())
  } catch (err) {
    //const errors = err.response.data.errors;
    //yield put(setAlert(errors))
    yield put(registerUserRequest.failure(err));
  }
}

export default function*() {
  yield all([takeLatest(getType(registerUser), handleRegisterUser)]);
}
