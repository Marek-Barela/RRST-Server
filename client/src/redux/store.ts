import { applyMiddleware, createStore, Middleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, RootState } from "./root-reducer";
import rootSaga from "./root-saga";
import { RootAction } from "./root-actions";

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore (initialState?: RootState): Store<RootState, RootAction> {
  const sagaMiddleware = createSagaMiddleware();
  const store: Store<RootState, RootAction> = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  (store as any).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
