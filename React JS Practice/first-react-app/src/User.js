import React, { Component } from 'react';
import {MyContext} from './App';

export default class User extends Component {
    render() {
        return (
            <div>
                <h1> User Component</h1>
                <MyContext.Consumer>
                    {data =>( 
                    <>
                    <h1>{data.name}</h1><br/>
                    <h1>{data.value}</h1>
                    </>)}
                </MyContext.Consumer>
            </div>
        )
    }
}
