import React, { Component } from "react";

import "./app.css";
import "./sidebar/sidebar.css";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";

import { connect } from "react-redux";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        {!!this.props.isAuthenticated && !!this.props.jwtToken ? (
          <Topbar />
        ) : null}
        {!!this.props.isAuthenticated && !!this.props.jwtToken ? (
          <Sidebar />
        ) : null}
        <div className={!!this.props.isAuthenticated && !!this.props.jwtToken ? "dashboard-content" : null} id="dashboard-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    jwtToken: state.auth.token,
  };
}

export default connect(mapStateToProps)(App);
