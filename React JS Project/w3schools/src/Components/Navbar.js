import React, { useState } from "react";
import "./components.css";

function Navbar() {
  const [click, setclick] = useState(false);
  const [active, setactive] = useState(false);

  let prevScroll = window.pageYOffset;
  
  window.onscroll = ()=>{
    let currentScroll = window.pageYOffset;
    document.querySelector('.icon__nav').style.top = prevScroll>currentScroll ? 0 : '-85px';
    prevScroll = currentScroll;
  }
  
  const responsive = ()=>{
    setclick(!click);
    const nav = document.querySelector('.icon__nav');
    nav.classList.toggle('responsive');
  }
  
  return (
    <div className="icon__nav">
      {/* Tooggling custom menuIcon */}
      {/* <a
        href="#f"
        // useState --
        className={`bar__container ${click && "change"}`}
        onClick={responsive}

      >
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </a> */}
      <a className={active?'active':''} onClick={()=>setactive(true)} href="/">
      Home
      </a>
      
      <a href="/images">
        Images
      </a>
      <a href="/buttons">
        Buttons
      </a>
      <a href="/forms">
        Forms
      </a>
      <a href="/filters">
        Filters
      </a>
      <a href="/tables">
        Tables
      </a>
      <a href="/more">
        More
      </a>
      
      {/* Toggling menuIcon */}
      <a className="toggleIcon" href="#f" onClick={responsive}>
        <i className={`fas ${click ? "fa-times" : "fa-bars"}`}></i>
      </a>
    </div>
  );
}

export default Navbar;
