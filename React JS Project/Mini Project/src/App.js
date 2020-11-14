import React,{useState} from 'react'
import './App.css'
export default function App() {
const [count, setCount] = useState({volume: 20,
                                    bass: 20,
                                    mid: 20,
                                    treble: 20
                                    })                       
    return (
        <>
            <Row count={count.volume} setCount={setCount} name="volume"/>
            <Row count={count.bass} setCount={setCount} name="bass"/>
            <Row count={count.mid} setCount={setCount} name="mid"/>
            <Row count={count.treble} setCount={setCount} name="treble"/>
        </>
    )
}
const Up = ({count,setCount}) => <button onClick={console.log(count)}>+</button>
const Down = ({count,setCount}) => <button onClick={()=>setCount(count-1)}>-</button>

const Row = ({count,setCount,name}) => {
   return <div className="main">
        <Up setCount={setCount} count={count}/>
        <div className="cont">
            <div className="ele">{count}</div>
            <div className="ele">{name}</div>
        </div>
        <Down setCount={setCount} count={count}/>
    </div>
}