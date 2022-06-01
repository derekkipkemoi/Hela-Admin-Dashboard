import { Add, Refresh } from "@mui/icons-material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import StaffDataTable from "../../../dataTables/StaffDataTable";

import "../../management.css";

class Users extends Component {
  state = {
    showStaff: true,
  };

  showUsers = () => {
    this.setState({
      showStaff: false,
    });
  };

  showStaff = () => {
    this.setState({
      showStaff: true,
    });
  };

  render() {
    return (
      <div className="row management-section">
        <div className="d-flex justify-content-between">
          <div className="fw-bold">Management</div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <div class="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </div>
              <li class="breadcrumb-item " aria-current="page">
                Staff
              </li>
            </ol>
          </nav>
        </div>
        <div className="col action-section">
          <div className="actions-name">Staff</div>
        </div>
        <div className="col tabs-section">
          <div className="refresh-management-button">
            <Refresh />
          </div>
        </div>
        <div className="all-data-tables-holder ">
          <StaffDataTable />
        </div>
      </div>
    );
  }
}

export default Users;
