import React, { Component } from 'react'
import axios from 'axios';

export default class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId : '',
             title  : '',
             body   : ''
        }
    }

    inputChange = e => this.setState({[e.target.name] : e.target.value})
    
    changeSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>console.log(response))
        .catch(err => console.log(err));
    }

    render() {
        const {userId,title,body} = this.state;
        return (
            <form onSubmit={this.changeSubmit}>
            <input value={userId}
                   type='text'
                   name="userId"
                   onChange={this.inputChange}/> <br/>

                   <input value={title}
                   type='number'
                   name="title"
                  onChange={this.inputChange}/> <br/>

                   <input value={body}
                   type='text'
                   name="body"
                    onChange={this.inputChange}/><br/>
            
                <button type="submit">Submit</button>
            </form>
        )
    }
}
