import React, { useEffect } from "react";
import './accordionTabs.css';

const projects = [
  {
    heading: "Facebook",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ea   temporibus magnam quidem iure quasi?",
  },
  {
    heading: "Messenger",
    info:
      "ipsum dolor Lorem  sit amet consectetur adipisicing elit. Eligendi, ea      temporibus magnam quidem iure quasi?",
  },
  {
    heading: "Todo-App",
    info:
      "ea    temporibusLorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,  magnam quidem iure quasi?",
  },
  {
    heading: "Twitter",
    info:
      " sit amet consectetur adipisicing elit. Eligendi, ea temporibus magnam quideLorem ipsum dolorm iure quasi?",
  },
];

function Tabs() {
  useEffect(() => {
    document.querySelector("#Facebook").classList.add("active");
  }, []);
  const setTab = (id) => {
    document
      .querySelectorAll(".tab__content")
      .forEach((a) => a.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  };
  return (
    <>
      <h2>Vertical Tabs</h2>
      <div className="tabs">
        <div className="tab">
          {projects.map((project) => {
            return (
              <button
                onClick={() => setTab(project.heading)}
                key={project.heading}
              >
                {project.heading}
              </button>
            );
          })}
        </div>

        {projects.map((project) => {
          return (
            <div
              className="tab__content"
              id={project.heading}
              key={project.heading}
            >
              <h1>{project.heading}</h1>
              <p>{project.info}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Tabs;
