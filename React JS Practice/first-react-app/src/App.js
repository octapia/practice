import React from 'react';
import CustomHook from './Student';

function App(){
const data1 = CustomHook();
const data2 = CustomHook();

return (
    <>
    <h1> count1 : {data1.count}</h1>
    <button onClick={data1.incrementButton}>Change</button>

    <h1> count2 : {data2.count}</h1>
    <button onClick={data2.incrementButton}>Change</button>
    </>
)
}
export default App;