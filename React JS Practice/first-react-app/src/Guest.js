import React, { Component } from 'react';

class Guest extends Component {
    render() { 
        return ( 
            <>
            <h1>Welcome Guest</h1>
            <button onClick={this.props.clickData}> Log in</button>
            </>
         );
    }
}
 
export default Guest;