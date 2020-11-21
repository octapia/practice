import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <>
      <nav className="nav">
        <Navlink section="Home" path="/" iconClass="fas fa-house-user" />
        <Navlink
          section="Skills"
          path="/skill"
          iconClass="fas fa-star-half-alt"
        />
        <Navlink section="Projects" path="/projects" iconClass="fas fa-code" />
        <Navlink
          section="Contact"
          path="/contact"
          iconClass="far fa-address-card"
        />
      </nav>
    </>
  );
}

const Navlink = ({ section, path, iconClass }) => {
  const style = {
    color: "fuchsia",
    fontWeight: "bold",
    border: "5px solid fuchsia",
  };
  return (
    <NavLink activeStyle={style} exact className="NavLink" to={path}>
      <i className={iconClass}></i>
      {section}
    </NavLink>
  );
};

export default Nav;
