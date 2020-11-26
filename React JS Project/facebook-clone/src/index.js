import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { reducer, initialState } from "./Components/reducer";
import Stateprovider from "./Stateprovider";

ReactDOM.render(
  <Stateprovider initialState={initialState} reducer={reducer}>
    <App />
  </Stateprovider>,
  document.getElementById("root")
);
