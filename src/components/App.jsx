import React, { Component } from "react";

import "./app.css";
import "./sidebar/sidebar.css";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";

import { connect } from "react-redux";

class App extends Component {
  state = {
    navBarExpanded: false,
  };
  NavBarExpanded = (navBarExpanded) => {
    this.setState({
      navBarExpanded: navBarExpanded,
    });
  };
  render() {
    return (
      <div>
        {!!this.props.isAuthenticated && !!this.props.jwtToken ? (
          <Topbar NavBarExpanded={this.NavBarExpanded} />
        ) : null}
        {!!this.props.isAuthenticated && !!this.props.jwtToken ? (
          <Sidebar NavBarExpanded={this.state.navBarExpanded} />
        ) : null}
        <div
          className={
            !!this.props.isAuthenticated && !!this.props.jwtToken
              ? "dashboard-content"
              : null
          }
          id="dashboard-content"
        >
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
