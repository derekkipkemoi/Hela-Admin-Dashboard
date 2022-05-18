import React, { Component } from "react";

import "./app.css";
import "./sidebar/sidebar.css"
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Topbar />
        <Sidebar />
        <div className="dashboard-content" id="dashboard-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
