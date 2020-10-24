import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'Tahid',
            roll: this.props.roll
        };
    }

handleButton =  (id,e) => console.log(id,e);


    render() { 
        return (
            <>
            <h1>Name : {this.state.name}</h1>
            <h1>Roll : {this.state.roll}</h1>
            
            {/* passing Arguments to event Handlers */}

            {/* Using function */}
            {/* <button onClick={e => this.handleButton(this.state.name,e)}>Click Me</button> */}

            {/* Using bind() Method  */}
            <button onClick={this.handleButton.bind(this,this.state.name)}>Click Me</button>
            </>
          );
    }
}
 
export default App;
 
