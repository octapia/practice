import React from "react";
import '../components.css';
import Accordion from "./Accordion";
import CascadingDropdown from "./CascadingDropdown";
import Dropdown from "./Dropdown";
import FullScreenNav from "./FullScreenNav";
import SearchMenu from "./SearchMenu";
import Tabs from "./Tabs";

function Home() {
  return (
    <div className="home page">
       <Accordion />
      <hr />
      <FullScreenNav />
      <hr />
      <Tabs />
      <hr />
      <CascadingDropdown />
    
      <hr/>
      <Dropdown />
      <hr />
     
      <SearchMenu />
      <hr />
  
    </div>
  );
}

export default Home;
