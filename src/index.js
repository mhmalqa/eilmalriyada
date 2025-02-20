
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import smoothscroll from "smoothscroll-polyfill";
import { HelmetProvider } from "react-helmet-async";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
smoothscroll.polyfill();

root.render(
  <React.StrictMode>
    <HelmetProvider>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </HelmetProvider>
  </React.StrictMode>
);
