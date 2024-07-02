import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import smoothscroll from "smoothscroll-polyfill";
const root = ReactDOM.createRoot(document.getElementById("root"));
smoothscroll.polyfill();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
