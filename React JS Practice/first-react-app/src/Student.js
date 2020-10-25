import React, { Component } from 'react'

import Mark from './Mark';

export default class Student extends Component {
    constructor(){
        super();
        this.state = {
            roll :101
        }
    }
    clickHandle = ()=>{
        console.log('Clicked');
        this.setState({roll:this.state.roll + 2})
    }
    render() {
        return (
            <div>
                <Mark roll={this.state.roll}/>
                <button onClick={this.clickHandle}>Change</button>
            </div>
        )
    }
}
