import * as api from "./authorization-api";
import { loadUser, loadUserRequest } from "./authorization-actions";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { UserResponse } from "../__commonModels__/userModel";
import setAuthToken from "../../utils/setAuthToken";

export function* handleFetchUser() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    yield put(loadUserRequest.request());
    const userResponse: UserResponse = yield call(api.getUserFromDatabase);
    yield put(loadUserRequest.success(userResponse));
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    yield put(loadUserRequest.failure(err));
  }
}

export default function*() {
  yield all([takeEvery(getType(loadUser), handleFetchUser)]);
}
