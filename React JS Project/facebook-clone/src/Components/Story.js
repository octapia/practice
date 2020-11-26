import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

function Story({ bgImg, src, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${bgImg})` }}>
      <Avatar className="story__avatar" src={src} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
