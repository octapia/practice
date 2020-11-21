import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './Nav'
import Home from './Components/Home'
import Skill from './Components/Skill'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/skill">
              <Skill />
            </Route>
            <Route path="/projects/:projectId" component={Projects}/>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

