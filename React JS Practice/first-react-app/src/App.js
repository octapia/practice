import React, { Component } from 'react';
import User from './User';

export const MyContext = React.createContext()

export default class App extends Component {
    state = {
        name: 'Tahid',
        value : 11
    }
    render() {
        return (
            <MyContext.Provider value={this.state}>
                <User />
            </MyContext.Provider>

        )
    }
}
