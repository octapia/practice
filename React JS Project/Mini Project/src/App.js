import React from 'react'
import './App.css'
import CreditCard from './Components/CreditCard'

export default function App (props) {
    

        return (
            <>
           <CreditCard cardInfo={info}/>
            </>
        )
}


const info = {
    person : 'Daniel Masqurido',
    expDate: '09/22',
    cardNo : '1232-1343-3455-2334',
    bank   : 'Islami Bank'
}

