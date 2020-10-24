import React, { Component } from 'react';

class App extends Component {
    // // this problem solution using constructor bind method
    // constructor(props){
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // more easy way using es6 feature arrow function
   handleClick = () => {
        console.log('Button Clicked',this);
    }
    render() { 
        return ( 
            <>
                <button onClick={this.handleClick}>Click Me</button>          
            </>
         );
    }
}
 
export default App;