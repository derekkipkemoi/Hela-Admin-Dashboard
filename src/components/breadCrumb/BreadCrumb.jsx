import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Home } from "@mui/icons-material";

class BreadCrumb extends Component {
  state = {};
  render() {
    return (
      <div class="row  ps-2 fs-12">
        <Breadcrumb>
          <Breadcrumb.Item active>/ Dashboard</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default BreadCrumb;
