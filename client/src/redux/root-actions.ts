import { Dispatch as ReduxDispatch } from "redux";
import { ActionType } from "typesafe-actions";
import * as counter from "../components/Counter/Counter-actions";
import * as authorization from "../features/authorization/authorization-actions";
import * as register from "../features/register/register-actions";
import * as login from "../features/login/login-actions";
import * as alert from "../features/alert/alert-actions";

export const actions = {
  counter,
  authorization,
  register,
  login,
  alert
};

export type RootAction = ActionType<typeof actions>;
export type Dispatch = ReduxDispatch<RootAction>;
