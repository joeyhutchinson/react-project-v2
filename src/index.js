import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import data from "./data";
import App from "./components/app";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App
      sliderImages={data.slider_images}
      apiKeys={data.api_keys}
      links={data.links}
    />
  </Router>,
  rootElement
);
