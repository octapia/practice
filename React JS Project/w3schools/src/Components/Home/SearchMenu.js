import React from "react";
import "./searchmentu.css";

function SearchMenu() {
  const filter = () => {
    const menu = document.querySelector(".my__menu"),
      link = menu.querySelectorAll("a"),
      input = document.querySelector("#search").value.toUpperCase();
    link.forEach(
      (t) =>
        (t.style.display =
          t.innerText.toUpperCase().indexOf(input) > -1 ? "" : "none")
    );
  };
  return (
    <div id="search__menu">
        <h2>Filtering Items</h2>
      <input type="text" id="search" onKeyUp={filter} placeholder="Search.." />
      <ul className="my__menu">
        <li>
          <a href="#search__menu">HTML</a>
        </li>
        <li>
          <a href="#search__menu">CSS</a>
        </li>
        <li>
          <a href="#search__menu">JAVASCRIPT</a>
        </li>
        <li>
          <a href="#search__menu">React</a>
        </li>
        <li>
          <a href="#search__menu">Python</a>
        </li>
        <li>
          <a href="#search__menu">NodeJS</a>
        </li>
        <li>
          <a href="#search__menu">MongoDB</a>
        </li>
        <li>
          <a href="#search__menu">ExpressJS</a>
        </li>
      </ul>
    </div>
  );
}

export default SearchMenu;
