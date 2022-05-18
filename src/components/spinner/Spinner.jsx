import React, { Component } from "react";

import "./spinner.css";

class Spinner extends Component {
  render() {
    return (
        <div className="fs-5 text-dark text-center mt-1 mb-1 fw-bold">
        <div class="lds-roller text-center mx-auto-0"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }
}

export default Spinner;
