import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { subscribe } from './myRedux';

subscribe(()=>render(
    <App />,
    document.getElementById("root")
))