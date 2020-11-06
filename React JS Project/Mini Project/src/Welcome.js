import React, { Component } from 'react'

import LogProps from "./LogProps";

function Welcome(props) {
  return (<button onClick={props.incrementCount}>You Clicked {props.count}  times</button>);
}

export default LogProps(Welcome);