import { ArrowBack, Done, Star } from "@mui/icons-material";
import { Link, withRouter } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import "../management.css";
import PageLoadingSpinner from "../../spinner/PageLoadingSpinner";

const toTitleCase = (str) =>
  str.replace(
    /(^\w|\s\w)(\S*)/g,
    (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
  );

class ViewRole extends Component {
  state = {
    roleName: this.props.location.state.role,
    roleDescription: this.props.location.state.description,
    loading: false,
  };

  componentDidMount = () => {
    this.setState({
      roleName: this.props.location.state.role,
      roleDescription: this.props.location.state.description,
    });
    this.getRoleDetails();
  };

  getRoleDetails = async () => {
    this.setState({
      loading: true,
    });
    await this.props.getRoleDetails(this.state.roleName);
    this.setState({
      loading: false,
    });
  };
  render() {
    let assignedPermissions = Object.entries(this.props.assigned_permissions);
    let permissionsNames = [];
    let permissionsDescriptions = [];
    for (
      let assign_permission = 0;
      assign_permission < assignedPermissions.length;
      assign_permission++
    ) {
      permissionsNames.push(assignedPermissions[assign_permission][0]);
      const output = Object.entries(
        assignedPermissions[assign_permission][1]
      ).map(([key, value]) => ({
        key,
        value,
      }));
      permissionsDescriptions.push(output);
    }

    return (
      <div className="row add-section ms-2">
        <div className="d-flex justify-content-between">
          <div className="fw-bold">Management</div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <div class="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </div>
              <div class="breadcrumb-item">
                <Link to={"/rolespermissions"}>Role And Permissions</Link>
              </div>
              <li class="breadcrumb-item " aria-current="page">
                View Role
              </li>
            </ol>
          </nav>
        </div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">Role Details</div>
            {/* <Link
              type="button"
              class="btn action-button"
              to={"/rolespermissions"}
            >
              <ArrowBack />
              Back
            </Link> */}
          </div>
        </div>

        <div className="card">
          <div class="card-body">
            <div className="d-flex justify-content-end">
              <Link
                className="button-approved"
                to={{
                  pathname: "/rolespermissions/updaterole",
                  state: {
                    role: this.state.roleName,
                    description: this.state.description,
                  },
                }}
              >
                Update
              </Link>
            </div>
            <div className="row">
              <div class="col-sm-12 col-md-6 col-xl-6 mb-3">
                <label class="form-label">
                  Role Name
                </label>
                <input
                  type="text"
                  disabled="true"
                  className="form-control"
                  placeholder="Type role name"
                  value={this.state.roleName}
                />
              </div>
              <div className="col-sm-12 col-md-6 col-xl-6 mb-3">
                <label className="form-label">Role Description </label>
                <textarea
                  className="form-control"
                  placeholder="Does not have role description"
                  rows="3"
                  disabled="true"
                  value={this.state.roleDescription}
                ></textarea>
              </div>

              {this.state.loading ? (
                <PageLoadingSpinner />
              ) : (
                <div class="container">
                  <text>Role Permissions</text>
                  <hr />
                  {assignedPermissions.map((permission, index) => {
                    return (
                      <div className="mt-3">
                        <text className="permission-header">
                          {toTitleCase(
                            permissionsNames[index].replace(/_/g, " ")
                          )}
                        </text>
                        <div class="row">
                          {permissionsDescriptions[index].map(
                            (permissionDescription, index1) => {
                              return (
                                <div class="d-flex col-3">
                                  <Done style={{ fontSize: 20, color:"#0acf97"}}/>
                                  <div class="permission-description">
                                    {permissionDescription.value
                                      .replace(/-/g, " ")
                                      .replace(/_/g, " ")
                                      .charAt(0)
                                      .toUpperCase() +
                                      permissionDescription.value
                                        .replace(/-/g, " ")
                                        .replace(/_/g, " ")
                                        .slice(1)}
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                        <hr className="fw-bold"></hr>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    role: state.userRolesAndPermissions.role,
    assigned_permissions: state.userRolesAndPermissions.assigned_permissions,
    message: state.userRolesAndPermissions.message,
  };
}

export default withRouter(connect(mapStateToProps, actions)(ViewRole));
