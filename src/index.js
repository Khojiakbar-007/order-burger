import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux/store";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import reportWebVitals from './reportWebVitals';

// serviceWorkerRegistration.unregister();
// reportWebVitals();
