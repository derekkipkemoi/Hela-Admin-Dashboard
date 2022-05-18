import { Add, Refresh, Search } from "@mui/icons-material";
import React, { Component } from "react";
// import RolesDataTables from "./RolesDataTables";

import "../management.css";
import AddUserModal from "./AddUserModal";
import UsersDataTables from "./UsersDataTables";

// import AddRoleModal from "./AddRoleModal";
// import ViewRoleModal from "./ViewRoleModal";
// import PermissionsDataTables from "./PermissionsDataTables";
// import AddPermissionModal from "./AddPermissionModal";
class StaffAndUsers extends Component {
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
        <div className="fw-bold">Management</div>
        <div className="col action-section">
          <div className="actions-name">
            {this.state.showStaff ? "Staff" : "Users"}
          </div>

          <div className="actions-search">
            <Search className="ms-2" />
            <input
              type="text"
              className="input-section form-control shadow-none"
              onChange={this.onSearchMessages}
              placeholder="Search"
            />
          </div>

          <AddUserModal/>
        </div>
        <div className="col tabs-section">
          <div
            className={
              this.state.showStaff ? "btn btn-tab-selected" : "btn btn-tab"
            }
            onClick={this.showStaff}
          >
            Staff
          </div>
          <div
            className={
              this.state.showStaff ? "btn btn-tab" : "btn btn-tab-selected"
            }
            onClick={this.showUsers}
          >
            Users
          </div>

          <div className="refresh-management-button">
            <Refresh />
          </div>
        </div>
        {this.state.showStaff ? (
          <UsersDataTables/>
        ) : null}
      </div>
    );
  }
}

export default StaffAndUsers;
