import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props);
        this.backRef = null;
        this.setRef = (e) => this.backRef = e;
    }
   componentDidMount = e =>  this.backRef.focus()

   
    render() {
        return (
            <div>
                <form className="p-2" >
              
                Input : <input type="text" ref={this.setRef} /><br/> <br/>
               Pass <input type="text"  />
                </form>
    
                </div>
        )
    }
}
