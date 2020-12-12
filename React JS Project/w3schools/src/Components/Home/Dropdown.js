import React from 'react'
import './dropdown.css'

function Dropdown() {
    return (
        <div className="dropdown">
            <button className="dropdown__btn">Onhover Dropdown
            <i className="fas fa-angle-double-down"></i></button>
            <div className="dropdown__content">
                <a href="#">LInk 1</a>
                <a href="#">LInk 2</a>
                <a href="#">LInk 3</a>
            </div>
            
        </div>
    )
}

export default Dropdown
