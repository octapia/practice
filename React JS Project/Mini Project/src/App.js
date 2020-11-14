import React,{useState} from 'react'
import Nav from "./Components/Nav";
export default function App() {
    const [activeTab, setActiveTab] = useState('cart')
    return (
        <div className="App">
            <Nav activeTab={activeTab}
                 onTabChange={setActiveTab}/>
            <main className="app-content">
               <Content tab={activeTab} />
            </main>
        </div>
    )
}


const Content = ({tab}) => {
    switch(tab) {
        default : 
        case 'items' :
            return <div>Items</div>;
        case 'cart'  :
            return <div>Cart</div>;
    }
}