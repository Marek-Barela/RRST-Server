import { Dispatch as ReduxDispatch } from "redux";
import { ActionType } from "typesafe-actions";
import * as counter from "../components/Counter/Counter-actions";
import * as authorization from "../features/authorization/authorization-actions";

export const actions = {
  counter,
  authorization
};

export type RootAction = ActionType<typeof actions>;
export type Dispatch = ReduxDispatch<RootAction>;
