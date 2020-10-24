import { render } from '@testing-library/react';
import React, { Component } from 'react';

function App(props){
    // function handleButton(){
    //     console.log('BUtton clicked');
    // }
    const handleButton = (e)=>{
        e.preventDefault();
        console.log('Button Clicked');
    }
        return (
        <>
        <a href="http://www.facebook.com" onClick={handleButton}>Click Me</a>
        </>);
}
 
export default App;