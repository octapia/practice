import React, { Component } from 'react';
import './Navbar.css';
import {MenuItems} from './MenuItems';

export default class Navbar extends Component {

    state = {clicked: false};

    clickedOrNot = ()=> this.setState({clicked:!this.state.clicked});

    render() {
        return (
            <nav className="navbar">

                {/* Logo Section */}
               <div className="logo">React 
                   <i className="fab fa-react"></i>
               </div>

                {/* mobile toggler */}
                <div className="menuIcon" onClick={this.clickedOrNot}>
                    <i className={this.state.clicked?'fa fa-times':'fa fa-bars'}></i>
                </div>

                {/* Menu Items */}
                <ul className={this.state.clicked ? 'nav-items active':'nav-items'}>
                    {MenuItems.map( (item,index) =>{
                        return (
                         <li>
                            <a  href={item.href}
                                className={item.class} >
                                {item.value}
                            </a>
                        </li> )
                    })
                    }
                </ul>

            </nav>
        )
    }
}
