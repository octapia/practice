import React from "react";
import "./Components.css";



function Skill() {
  return (
    <div className="skill">
      <h2 >My Skills</h2>
      <Progress progress="HTML" value="70"/>
      <Progress progress="CSS" value="60"/>
      <Progress progress="JavaScript" value="50"/>
      <Progress progress="React" value="40"/>
      <Progress progress="NPM" value="30"/>
    </div>
  );
}

export default Skill;

const Progress = ({progress,value}) =>{
  return(<>
  <label for="progress" id="label">{progress}</label>
    <progress max="100" value={value} id="progress">
      {value}%
    </progress>
  </>)
}
