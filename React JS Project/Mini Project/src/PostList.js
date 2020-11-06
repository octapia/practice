import React, { Component } from 'react'
import axios from 'axios'
export default class PostList extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
        posts : []
     }
 }

 componentDidMount(){
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response => this.setState({posts:response.data}))
 }
 
    
    render() {
        const {posts} = this.state;
        return (
            <ul type='square'>
              {posts.map(post => <li key={post.id}>{post.title} </li>)}  
            </ul>
        )
    }
}
