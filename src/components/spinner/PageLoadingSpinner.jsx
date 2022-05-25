import React, { Component } from "react";
import "./spinner.css";
class PageLoadingSpinner extends Component {
  state = {};
  render() {
    return (
        <div className="loader">Loading...</div>
    );
  }
}

export default PageLoadingSpinner;
