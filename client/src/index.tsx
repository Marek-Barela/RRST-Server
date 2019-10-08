import React from "react";
import ReactDOM from "react-dom";
import App from "./components";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import "./index.css";

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
