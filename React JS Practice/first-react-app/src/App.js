import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    render() { 
        return ( 
            <>
            <h1>Name {this.props.name}</h1>
            <h1>Roll {this.props.roll}</h1>
            </>
         );
    }
}
 
App.defaultProps ={
    name: 'Tahidur Rahman'
}
App.propTypes = {
    name : PropTypes.string.isRequired,
    roll : PropTypes.number
}

export default App;

 
