import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : ''
        };
        this.textInput = React.createRef();
    }
    // componentDidMount = () => {
    //    this.textInput.current.focus()
    // }
    
    getInput = e =>{
        e.preventDefault();

        this.setState({value:this.textInput.current.value})
    }

    render() {
        return (
            <div>
                <form className="p-2" onSubmit={this.getInput}>
              
                Input : <input type="text" ref={this.textInput} /><br/> <br/>
                <input type="submit" value="Submit" />
                </form>
                  You Typed : {this.state.value} <br/>
                </div>
        )
    }
}
