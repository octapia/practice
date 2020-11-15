import React, { Component } from "react";
import Coin from "./coin";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Toss your coin</h1>
        <Coin />
      </div>
    );
  }
}

export default App;
