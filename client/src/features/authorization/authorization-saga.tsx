import * as api from "./authorization-api";
import { fetchUser, fetchUserRequest } from "./authorization-actions";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { UserResponse } from "./authorization-model";
import setAuthToken from "../../utils/setAuthToken";

export function* handleFetchUser() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    yield put(fetchUserRequest.request());
    const userResponse: UserResponse = yield call(api.getUserFromDatabase);
    yield put(fetchUserRequest.success(userResponse));
  } catch (err) {
    yield put(fetchUserRequest.failure(err));
  }
}

export default function*() {
  yield all([takeEvery(getType(fetchUser), handleFetchUser)]);
}
