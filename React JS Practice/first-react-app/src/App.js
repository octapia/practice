import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name :'Tahid',
            roll : this.props.roll 
          }
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