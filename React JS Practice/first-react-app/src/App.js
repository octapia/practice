import React, { Component } from 'react'

export default class App extends Component {
    state = {
        users : [
            {id:101, name:'Tahid', roll : 220},
            {id:103, name:'Sahid', roll : 122},
            {id:105, name:'jahid', roll : 212},
        ],
        isLoggedIn : false
    }

    render() {
        return (
            <ul >
               {this.state.users.map( a => <li key={a.id}>{a.id + " "+ a.name}</li>)} 
            </ul>
        )
    }
}
