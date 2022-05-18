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
        <div className="fw-bold">Management</div>
        <div className="col action-section">
          <div className="actions-name">Staff</div>

        
        </div>
        <div className="col tabs-section">
          

          <div className="refresh-management-button">
            <Refresh />
          </div>
        </div>

        <StaffDataTable />
      </div>
    );
  }
}

export default Users;
