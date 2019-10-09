import { combineReducers } from "redux";
import { RootAction } from "./root-actions";
import counter from "../components/Counter/Counter-reducer";
import authorization from "../features/authorization/authorization-reducer";

const reducerMap = {
  counter,
  authorization
};

export type RootState = {
  [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]>;
};
export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);
