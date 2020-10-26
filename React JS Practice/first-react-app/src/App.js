import React, { Component } from 'react'

export default class App extends Component {
    state = {
        change :false
    }
    btnChange = () => this.setState({change:true})

    render() {
        const btn = {
            color: 'white',
            backgroundColor: 'green',
            fontSize:'42px'
        }
        if(this.state.change) btn.backgroundColor = 'red';
        
        return (
            <button onClick={this.btnChange} style={btn}>
                Button
            </button>
        )
    }
}
