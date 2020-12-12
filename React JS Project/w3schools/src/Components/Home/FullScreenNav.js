import React from "react";
import "./Fullscreennav.css";

function FullScreenNav() {
    
  const openNav = () => {
 document.querySelector(".overlay").style.width = "100%";
  };
  const closeNav = () => {
    document.querySelector(".overlay").style.width = "0%";
  };

  return (
    <div className="fullNav" id="fullNav">
      <div className="overlay" id="my__nav">
          <a href='#fullNav' onClick={closeNav} className="close__btn">
          &times;
        </a>

        <div className="overlay__content">
          <a href="#fullNav">Item 1</a>
          <a href="#fullNav">Item 2</a>
          <a href="#fullNav">Item 3</a>
          <a href="#fullNav">Item 4</a>
        </div>
      </div>
      <span onClick={openNav} className="open">Click me to Navigate</span>
    </div>
  );
}

export default FullScreenNav;
