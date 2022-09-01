import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
const element = <React.StrictMode><App /></React.StrictMode>;
root.render(element);
