import { createAction, createAsyncAction } from "typesafe-actions";

export const fetchUser = createAction("authorization/FETCH_USER");

export const fetchUserRequest = createAsyncAction(
  "authorization/FETCH_USER_REQUESTED",
  "authorization/FETCH_USER_SUCCEEDED",
  "authorization/FETCH_USER_FAILED"
)<undefined, object, Error>();
