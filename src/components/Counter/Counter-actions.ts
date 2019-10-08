import { createAction, createAsyncAction } from "typesafe-actions";

export const fetchCounter = createAction("counter/FETCH_COUNTER");

export const fetchCounterRequest = createAsyncAction(
  "counter/FETCH_COUNTER_REQUESTED",
  "counter/FETCH_COUNTER_SUCCEEDED",
  "counter/FETCH_COUNTER_FAILED"
)<undefined, number, Error>();

export const incrementCounter = createAction("counter/INCREMENT");

export const decrementCounter = createAction("counter/DECREMENT");
