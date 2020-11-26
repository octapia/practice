import React from "react";
import "./App.css";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import { useStateValue } from "./Stateprovider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          {/* app body */}
          <div className="app__body">
            <Sidebar />
            <Feed />
            <iframe
              src="https://www.facebook.com/TAHID.2/"
              width="600px"
              height="700px"
              style={{ border: "none", overflow: "hidden" }}
              title="iframe"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
