import { combineReducers } from "redux";
import { RootAction } from "./root-actions";
import counter from "../components/Counter/Counter-reducer";

const reducerMap = {
  counter
};

export type RootState = {
  [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]>;
};
export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);
