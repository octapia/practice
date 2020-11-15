import React, { Component } from "react";
import "./coin.css";
class Coin extends Component {
  static defaultProps = {
    coin: ["head", "tail"],
  };
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.handleToss = this.handleToss.bind(this);
  }
  handleToss() {
    const number = Math.floor(Math.random() * 2);
    this.setState({ number });
  }
  render() {
    const { number } = this.state;
    console.log(number);
    return (
      <div className="Coin">
        {number === 0 && (
          <img src="https://tinyurl.com/react-coin-heads-jpg" alt="" />
        )}
        {number === 1 && (
          <img src="https://tinyurl.com/react-coin-tails-jpg" alt="" />
        )}
        <button onClick={this.handleToss} className="btn btn-primary">
          Flip
        </button>
      </div>
    );
  }
}

export default Coin;
