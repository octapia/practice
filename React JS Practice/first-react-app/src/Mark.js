import React, { Component } from 'react'

export default class Mark extends Component {
    constructor(props){
        super(props);
        this.state= {
            mroll: this.props.roll
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log(props,state);
       if(props.roll !== state.roll){
           state.mroll = props.roll
       }else{ return null}
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.mroll < 109){
            console.log(nextProps,nextState,'Updated');
            return true ;
        }else{
            console.log(nextProps,nextState,'Not Updated');
            return false
        }
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevProps,prevState,'Snapshote before update');
        return 2
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log(prevProps,prevState,snapshot,'did update')
    }
    render() {
        return (
        <>
        <h1>Roll : {this.state.mroll}</h1>
        </>
        )
    }
}
