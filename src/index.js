import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom";

// src/redux/configureStore 불러오기
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
