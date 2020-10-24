import React, { Component } from 'react';

class App extends Component {
    state = {
        name :'Tahid',
        roll : this.props.roll 
      }
    render() { 
        return ( 
            <>
            <h1>Name : {this.state.name}</h1>
            <h1>Roll : {this.state.roll}</h1>
            </>
         );
    }
}
 
export default App;