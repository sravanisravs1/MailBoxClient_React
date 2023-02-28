import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./components/store/index";


/*
React bootstrap configuration
 */

// import "../node_modules/bootstrap/dist/bootstrap.css";

import "../node_modules/react-bootstrap/dist/react-bootstrap";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
