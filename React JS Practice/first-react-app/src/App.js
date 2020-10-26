import React, { Component } from 'react';

import Guest from './Guest';
import User from './User';

class App extends Component {
    state = {
        loggedIn : false
    };
    clickLogIn = () => this.setState({loggedIn : true});
    clickLogout = () => this.setState({loggedIn : false});


    render() { 
        const isLoggedIn = this.state.loggedIn ;
       return (
           isLoggedIn ? <User clickData={this.clickLogout}/> : <Guest clickData={this.clickLogIn}/>
       )
    }
}
 
export default App;