import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        return (
            <div>
                <h1>Name : {this.props.name}</h1>
                <h1>Roll : {this.props.roll}</h1>
            </div>
        )
    }
}
