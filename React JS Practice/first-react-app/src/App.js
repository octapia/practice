
import React, { Component } from 'react';


export default class App extends Component {
    render() {
        return (
            <div>
                <img src={process.env.PUBLIC_URL + '/demo.png'}
                width="400px" />
            </div>
        )
    }
}
