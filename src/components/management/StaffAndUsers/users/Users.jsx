import { Add, Refresh, Search } from "@mui/icons-material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import UsersDataTable from "../../../dataTables/UsersDataTable";

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
                Users
              </li>
            </ol>
          </nav>
        </div>
        <div className="col action-section">
          <div className="actions-name">Users</div>

          <Link type="button" class="btn action-button" to={"users/adduser"}>
            <Add />
            User
          </Link>
        </div>
        <div className="col tabs-section">
          <div className="refresh-management-button">
            <Refresh />
          </div>
        </div>
        <div className="all-data-tables-holder ">
          <UsersDataTable />
        </div>
      </div>
    );
  }
}

export default Users;
