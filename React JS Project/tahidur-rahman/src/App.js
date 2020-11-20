import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link,useParams,useRouteMatch } from "react-router-dom";

function App() {
  return (<>
      <Router>
        <div>

          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Topics">Topics</Link>
              </li>
            </ul>
          </nav>

        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/Topics">
            <Topics/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        </div>
      </Router>
          </>
  );
}

export default App;

const Home = () => <h2 className="home">Home</h2>;
const About = () => <h2 className="about">About</h2>;
const Topics = () => {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>


      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}