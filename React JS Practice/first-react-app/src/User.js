import React, { Component } from 'react';
class User extends Component {
    render() { 
        return (
            <>
            <h1>Welcome User</h1>
            <button onClick={this.props.clickData}> Log Out</button>
            </>
         );
    }
}
 
export default User;