import * as api from "./Counter-api";
import { fetchCounter, fetchCounterRequest } from "./Counter-actions";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { SwapiPeopleResponse } from "./Counter-model";

export function* handleFetchCounter() {
  try {
    yield put(fetchCounterRequest.request());
    const swapiResponse: SwapiPeopleResponse = yield call(
      api.getCounterFromSwapi
    );
    yield put(fetchCounterRequest.success(Number(swapiResponse.mass)));
  } catch (err) {
    console.log(err);
    yield put(fetchCounterRequest.failure(err));
  }
}

export default function*() {
  yield all([takeEvery(getType(fetchCounter), handleFetchCounter)]);
}
