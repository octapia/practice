
import React, { Component } from 'react';


export default class App extends Component {
    state = {
        name : 'TAHID',
        password :'pass'
    }
    clickHandle = (e)=> {
        this.setState({[e.target.name] : e.target.value.toUpperCase().substring(0,10)})
    }
    render() {
        return (
            <form className='form p-5 '>
                <label>Name :
                    <input 
                    type="text" 
                    name="name"
                    value={this.state.name}
                    className='m-2 p2 o-none'
                    onChange={this.clickHandle}/>
                </label>
                <label>Password :
                    <input 
                    type="password" 
                    name="password"
                    value={this.state.password}
                    className='m-2 p2'
                    onChange={this.clickHandle}/>
                </label>
                <button>Submit</button>
            </form>
        )
    }
}
