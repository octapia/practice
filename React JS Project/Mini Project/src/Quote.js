import React, { Component } from 'react'
// import has from 'lodash/has'
import * as _ from 'lodash';

export default class App extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
        },
      );
  }

  render() {
    const { items } = this.state;
    const quote = this.props.quote;
      return (
        <ul>
          { _.sampleSize(items,quote).map(item => {
           return <li>
                    <b style={{color:'green'}}>{item.text}</b><br/>
                    <i style={{float:'right',color:'red'}}>{item.author}</i><br/>
                  </li>
          })}
        </ul>
      );
    
  }  
}
