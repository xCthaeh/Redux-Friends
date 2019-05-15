import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./config/store";

ReactDOM.render(<App />, document.getElementById("root"));
