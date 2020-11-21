import React from "react";
import {NavLink } from 'react-router-dom';
import './App.css'

function Nav() {
    const style = {color:'red',fontWeight:'bold'}
  return (
    <>
      <nav className="nav">
        <NavLink activeStyle={style} className="NavLink" to="/" exact>Home</NavLink>
        <NavLink activeStyle={style} className="NavLink" to="/skill">Skill</NavLink>
        <NavLink activeStyle={style} className="NavLink" to="/projects">Projects</NavLink>
        <NavLink activeStyle={style} className="NavLink" to="/contact">Contact</NavLink>
      </nav>
    </>
  );
}

export default Nav;
