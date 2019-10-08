import { RootState } from "../../redux/root-reducer";

export const getCounter = (state: RootState): number => {
  return state.counter.count;
};

export const counterIsFetching = (state: RootState): Boolean => {
  return state.counter.isFetching;
};
