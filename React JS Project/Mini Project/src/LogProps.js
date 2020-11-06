import React, { Component } from 'react'

const LogProps = ChildComp => {
  
  class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment = ()=>{
      this.setState({count : this.state.count +1})
    }
    
    componentDidMount(){
      console.log(this.props);
    }
    render() {
      return <ChildComp count={this.state.count} incrementCount={this.increment}/>;
    }
  }
  return NewComp ;

}

export default LogProps