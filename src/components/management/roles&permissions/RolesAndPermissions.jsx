import { Add, Refresh, Search } from "@mui/icons-material";
import React, { Component } from "react";
import "../management.css";
import AddPermissionModal from "./AddPermissionModal";
import RolesDataTable from "../../dataTables/RolesDataTable";
import PermissionsDataTable from "../../dataTables/PermissionsDataTable";
import { Link } from "react-router-dom";
class RolesAndPermissions extends Component {
  state = {
    showRoles: true,
    roleName: "",
    roleDescription: "",
    roleIndex: -1,
  };

  showPermissions = () => {
    this.setState({
      showRoles: false,
    });
  };

  showRoles = () => {
    this.setState({
      showRoles: true,
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
                Roles And Permissions
              </li>
            </ol>
          </nav>
        </div>

        <div className="col action-section">
          <div className="actions-name">
            {this.state.showRoles ? "Roles" : "Permissions"}
          </div>

          {this.state.showRoles ? (
            <Link
              type="button"
              class="action-button"
              to={"rolespermissions/addrole"}
            >
              <Add />
              Roles
            </Link>
          ) : null}
        </div>
        <div className="col tabs-section">
          <div
            className={this.state.showRoles ? "btn-tab-selected" : "btn-tab"}
            onClick={this.showRoles}
          >
            Roles
          </div>
          <div
            className={this.state.showRoles ? "btn-tab" : "btn-tab-selected"}
            onClick={this.showPermissions}
          >
            Permissions
          </div>

          <div className="refresh-management-button">
            <Refresh />
          </div>
        </div>
        <div className="all-data-tables-holder ">
          {this.state.showRoles ? <RolesDataTable /> : <PermissionsDataTable />}
        </div>
      </div>
    );
  }
}

export default RolesAndPermissions;
