import { RootAction } from "../../redux/root-actions";
import {
  incrementCounter,
  decrementCounter,
  fetchCounterRequest
} from "./Counter-actions";
import { getType } from "typesafe-actions";

export type CounterState = {
  count: number;
  isFetching: boolean;
};

export const initialState: CounterState = {
  count: 0,
  isFetching: false
};

export default function(
  state: CounterState = initialState,
  action: RootAction
): CounterState {
  switch (action.type) {
    case getType(fetchCounterRequest.request):
      return {
        ...state,
        isFetching: true
      };
    case getType(fetchCounterRequest.success):
      return {
        ...state,
        count: action.payload,
        isFetching: false
      };
    case getType(fetchCounterRequest.failure):
      return {
        ...state,
        isFetching: false
      };
    case getType(incrementCounter):
      return {
        ...state,
        count: state.count + 1
      };
    case getType(decrementCounter):
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}
