import { combineReducers } from "redux";
import { RootAction } from "./root-actions";
import counter from "../components/Counter/Counter-reducer";
import authorization from "../features/authorization/authorization-reducer";
import register from "../features/register/register-reducer";

const reducerMap = {
  counter,
  authorization,
  register
};

export type RootState = {
  [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]>;
};
export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);
