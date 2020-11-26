import React from "react";
import "./Components.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="container">
        <Project title="TODO-APP" link="https://todo-app-3d848.web.app/" />
        <Project title="CHAT BOT" />
        <Project title="NETFLIX CLONE" />
        <Project title="TODO-APP" link="https://todo-app-3d848.web.app/" />
        <Project title="CHAT BOT" />
      </div>
    </div>
  );
}

export default Projects;

const Project = ({
  title,
  link,
  desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid vel, maxime totamd...",
}) => {
  return (
    <>
      <div className="project">
        <a href={link}>
          <h2 className="title">{title}</h2>
          <img
            className="projectImg"
            src="https://thefinancialexpress.com.bd/uploads/1587697289.jpg"
            alt=""
          />
        </a>

        <p>{desc}</p>
      </div>
    </>
  );
};
