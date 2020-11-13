import React, { Component } from "react";
import About from "./about";
import Contact from "./contact";
import Service from "./service";
import "./app.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "about",
    };
  }
  handlePageChange = (page) => {
    this.setState({ page });
  };
  renderPage = () => {
    const { page } = this.state;
    if (page === "about") return <About />;
    if (page === "contact") return <Contact />;
    return <Service />;
  };
  render() {
    return (
      <div className="App">
        <nav>
          <a onClick={() => this.handlePageChange("about")}>About</a>
          <a onClick={() => this.handlePageChange("Service")}>Service</a>
          <a onClick={() => this.handlePageChange("contact")}>Contact</a>
        </nav>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
