import { ArrowBack, Star } from "@mui/icons-material";
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

let userUpdatePermissionsList = [];

class UpdateRole extends Component {
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
    this.getPermissionsList();
  };

  handleCheckBoxChange = (permissionName) => {
    let index = userUpdatePermissionsList.indexOf(permissionName);
    if (index !== -1) {
      userUpdatePermissionsList.splice(index, 1);
    } else {
      userUpdatePermissionsList.push(permissionName);
    }
  };

  updateUserRole = async () => {
    function roleUpdate(role_name, user_permissions) {
      return { role_name, user_permissions };
    }
    let roleName = "Test Role";
    await this.props.updateRole(
      roleUpdate(roleName, userUpdatePermissionsList)
    );
  };

  getPermissionsList = async () => {
    await this.props.getPermissions();
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
                Update Role
              </li>
            </ol>
          </nav>
        </div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">Role Details</div>
          </div>
        </div>

        <div className="card">
          <div class="card-body">
            <div className="row">
              <div class="col-sm-12 col-md-6 col-xl-6 mb-3">
                <label class="form-label">
                  Role Name{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  type="text"
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
                  value={this.state.roleDescription}
                ></textarea>
              </div>

              {this.state.loading ? (
                <PageLoadingSpinner />
              ) : (
                <div class="container">
                  <text>Role Permissions</text>
                  <hr />
                  {this.props.allPermissionsList.map((permission, index) => {
                    return (
                      <div className="">
                        <text className="permission-header">
                          {toTitleCase(
                            permission.permissionGroup.replace(/_/g, " ")
                          )}
                        </text>
                        <div class="row">
                          {permission.permissionsList.map(
                            (permisionsListNames) => {
                              return (
                                <div class="d-flex col-sm-12 col-md-4 col-xl-3 col-xxl-3">
                                  <input
                                    type="checkbox"
                                    defaultChecked={permisionsListNames.exist}
                                    onChange={(e) =>
                                      this.handleCheckBoxChange(
                                        permisionsListNames.permissionName
                                      )
                                    }
                                  />

                                  <div className="ms-1">
                                    {permisionsListNames.permissionName}
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
            <div className="row">
              <div className="col d-flex justify-content-end">
                <button className="btn" onClick={this.updateUserRole}>
                  Confirm Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let permissionList = [];
  let userAssignedPermissionsList = [];
  let permissionsArrayed = Object.entries(
    state.userRolesAndPermissions.permissionsList
  );

  function createAllData(permissionGroup, permissionsList) {
    return { permissionGroup, permissionsList };
  }

  let userPermissionList = [];
  let userPermissionsArrayed = Object.entries(
    state.userRolesAndPermissions.assigned_permissions
  );

  function createData(permissionName, exist) {
    return { permissionName, exist };
  }

  for (let y = 0; y < userPermissionsArrayed.length; y++) {
    let arrayedSub = Object.entries(userPermissionsArrayed[y][1]);
    for (let q = 0; q < arrayedSub.length; q++) {
      userAssignedPermissionsList.push(arrayedSub[q][0]);
    }
  }

  for (let x = 0; x < permissionsArrayed.length; x++) {
    let permissionsInGroupList = [];
    let permissionGroupName = permissionsArrayed[x][0];
    let arrayedSub = Object.entries(permissionsArrayed[x][1]);
    for (let y = 0; y < arrayedSub.length; y++) {
      let permissionName = arrayedSub[y][0];

      if (userAssignedPermissionsList.indexOf(permissionName) > -1) {
        permissionsInGroupList[y] = createData(permissionName, true);
      } else {
        permissionsInGroupList[y] = createData(permissionName, false);
      }
    }

    permissionList[x] = createAllData(
      permissionGroupName,
      permissionsInGroupList
    );
  }

  return {
    role: state.userRolesAndPermissions.role,
    allPermissionsList: permissionList,
    userPermissionsList: userPermissionList,
    message: state.userRolesAndPermissions.message,
  };
}

export default withRouter(connect(mapStateToProps, actions)(UpdateRole));
