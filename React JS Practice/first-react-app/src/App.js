import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    render() { 
        return ( 
            <>
            <h1> {this.props.children}</h1>
            </>
         );
    }
}
 

export default App;

 
