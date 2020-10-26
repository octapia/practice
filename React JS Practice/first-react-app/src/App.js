import React, { Component } from 'react';

import Guest from './Guest';
import User from './User';

class App extends Component {
    render() { 
        const isRegistered = this.props.consumer;
       return isRegistered ? <User/> : <Guest/>
    }
}
 
export default App;