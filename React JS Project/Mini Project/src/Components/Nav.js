import React from "react";
import "./Nav.css";

export default function Nav({ activeTab, onTabChange }) {
  const setClassName = (tabName) =>
    `nav-item ${tabName === activeTab ? "selected" : ""}`;

  return (
    <nav className="nav">
      <ul>
        <NavItem
          navItem="items"
          cName={setClassName("items")}
          onTabChange={onTabChange}
        />
        <NavItem
          navItem="cart"
          cName={setClassName("cart")}
          onTabChange={onTabChange}
        />
      </ul>
    </nav>
  );
}

const NavItem = ({ navItem, cName, onTabChange }) => {
  return (
    <li className={cName}>
      <button onClick={() => onTabChange(navItem)}>{navItem}</button>
    </li>
  );
};
