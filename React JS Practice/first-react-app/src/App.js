import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'Tahid',
            roll: this.props.roll
        };
    }

handleButton =  () =>  {
        this.setState({name:'shahid',roll:22});
    };

    render() { 
        return (
            <>
            <h1>Name : {this.state.name}</h1>
            <h1>Roll : {this.state.roll}</h1>
            <button onClick={this.handleButton}>Click Me</button>
            </>
          );
    }
}
 
export default App;
 
