
import React, { Component } from 'react';
import Student from './Student';

class App extends Component {
   constructor(props){
       super(props);
       this.state = {
           name:this.props.name,
           roll : 22
       }
   }
   static getDerivedStateFromProps(props,state){
       console.log(props,state);
       return null;
   }
   componentDidMount(){
       console.log('MOunted')
   }
    render() { 
        return (
            <Student name="Tahid"/>
          );
    }
}
 
export default App;