import React, { useEffect } from "react";
import Counter from "./Counter";
import ProtectedRoute from "./ProtectedRoute";
import { Route, Switch } from "react-router-dom";
import { loadUser } from "../features/authorization/authorization-actions";
import store from "../redux/store";

const App: React.FC = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={() => <Counter />} />
      <Route exact path="/login" component={() => <Counter />} />
      <Route exact path="/registration" component={() => <Counter />} />
      <ProtectedRoute exact path="/dashboard" component={<Counter />} />
    </Switch>
  );
};

export default App;
