import React , { useState } from 'react';

function App (){
    const [name,setName] = useState("Tahid");
    const [roll, setroll] = useState(11)

    const clickHandle = ()=>{
        setName('rahul');
        setroll(22)
    }

    return (
        <>
        <h1>Name : {name}</h1>
        <h1>roll : {roll}</h1>

        <button onClick={clickHandle}>Change</button>
        </>
    )
}

export default App;