import React, { Component } from 'react'
import Quote from './Quote'

export default class App extends Component {
  state = {
    num : 1
  }
  changeInput = event => this.setState({num : event.target.value})

  render() {
    return (
      <div>
        <h2>Random Quote Generator</h2>
        <label >Number of Quotes :  </label>
        <input type="number" value={this.state.num} id="quotesNum" onChange={this.changeInput}/>

        <Quote quote={this.state.num}/>
      </div>
    )
  }
}
