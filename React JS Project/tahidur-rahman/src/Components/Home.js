import React from "react";
import "./Components.css";
import Particles from "react-particles-js";

function Home() {
  return (
    <div className="home">
      <div className="element">
        
      <h1 className="name"><span className="tahidur">Tahidur</span> <span className="rahman">Rahman</span></h1>
      <h1 className="text">I'm a Front-End-Developer.</h1>
      </div>
      <Particles
        id="particles-js"
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#0AABB1",
            },
            opacity: {
              value: 1,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 7,
              random: true,
              anim: {
                enable: true,
                speed: 3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 0.3,
            },
          },
        }}
      />
    </div>
  );
}

export default Home;
