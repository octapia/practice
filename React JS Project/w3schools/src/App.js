import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import Images from "./Components/Images/Images";
import Buttons from "./Components/Button/Buttons";
import Forms from "./Components/Forms/Forms";
import Filters from "./Components/Filters/Filters";
import Tables from "./Components/Tables/Tables";
import More from "./Components/More/More";
import Social from "./Components/Social";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Search /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/images" component={Images} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/forms" component={Forms} />
        <Route path="/filters" component={Filters} />
        <Route path="/tables" component={Tables} />
        <Route path="/more" component={More} />
        <Redirect to="/" />
      </Switch>
      <Social />
    </div>
  );
}

// const Search = ()=>{
//   return <input type="text"
//   placeholder="Search here..."
//   id="top__search"
//   />
// }

export default App;
