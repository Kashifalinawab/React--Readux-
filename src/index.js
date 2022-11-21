import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import counterReducer from "./Components/Counter/counterReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(counterReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
