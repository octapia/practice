import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main">
          <Nav />
          <Switch>
            <RouteComp path="/" exact comp={<Home />} />
            <RouteComp path="/skill" comp={<Skill />} />
            <RouteComp path="/projects" comp={<Projects />} />
            <RouteComp path="/contact" comp={<Contact />} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

const RouteComp = ({ path, comp }) => <Route path={path}>{comp}</Route>;

export default App;
