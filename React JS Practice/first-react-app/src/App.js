import React, { useState,useEffect } from 'react';

function App(){
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(20);
    
    const changeCount = () => setCount(count + 1);
    const changeCount2 = () => setCount2(count2 - 1);
    useEffect( ()=>{
        console.log('Effect Done !')
    },[count2,count])

    return (
        <>
        <h1>Count : {count}</h1>
        <button onClick={changeCount}>ChangeCount</button>
        <h1>Count2 : {count2}</h1>
        <button onClick={changeCount2}>ChangeCount2</button>
        </>
    )

}
export default App;