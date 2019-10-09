import { combineReducers } from "redux";
import { RootAction } from "./root-actions";
import counter from "../components/Counter/Counter-reducer";
import userData from "../features/__commonReducers__/userDataReducer";
import alert from "../features/alert/alert-reducer";

const reducerMap = {
  counter,
  userData,
  alert
};

export type RootState = {
  [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]>;
};
export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);
