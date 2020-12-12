import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      
      <img src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png" alt="" className="header__logo"/>

      <div className="header__input">
        <input type="text" className="header__inputBox" />
        <i className="fas fa-search header__searchLogo"></i>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <div className="header__optionLineOne">Hello</div>
          <div className="header__optionLineTwo">Sign In</div>
        </div>
        <div className="header__option">
          <div className="header__optionLineOne">Returns</div>
          <div className="header__optionLineTwo">& Orders</div>
        </div>
        <div className="header__option">
          <div className="header__optionLineOne">Your</div>
          <div className="header__optionLineTwo">Prime</div>
        </div>
      </div>

      <div className="header__basket">
        <i className="fas fa-shopping-cart header__basketLogo"></i>
        <div className="cart">0</div>
      </div>
    </div>
  );
}

export default Header;
