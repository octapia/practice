import React from 'react'
import './CreditCard.css'

export default function CreditCard({cardInfo}) {
    return (
        <div className="card">

        <Bank bank={cardInfo.bank}/>
        <CardNo cardno={cardInfo.cardNo}/>
        <Exp exp={cardInfo.expDate}/>
        <Name name={cardInfo.person}/>
            
        </div>
    )
}

const Bank = ({bank}) => <h2 className="bank">{bank}</h2>
const CardNo = ({cardno}) => <h2 className="cardno">{cardno}</h2>
const Exp = ({exp}) => <h2 className="exp">{exp}</h2>
const Name = ({name}) => <h2 className="name">{name}</h2>
