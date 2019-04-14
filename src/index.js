import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

import "bootstrap/dist/css/bootstrap.css";
//import "./css/backup.css";
import "./css/reset.css";
import "./css/index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
