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

let addedPermissionsList = [];

class AddRole extends Component {
  state = {
    roleName: "",
    roleDescription: "",
    loading: false,
  };

  componentDidMount = () => {
    this.getPermissionsList();
  };

  createRoleDetails=(event)=>{
    if(event.target.id === "role-name"){
      this.setState({
        roleName: event.target.value
      })
    }else{
      this.setState({
        roleDescription: event.target.value
      })
    }
  }

  handleCheckBoxChange = (permissionName) => {
    let index = addedPermissionsList.indexOf(permissionName);
    if (index !== -1) {
      addedPermissionsList.splice(index, 1);
    } else {
      addedPermissionsList.push(permissionName);
    }

    console.log("Added List", addedPermissionsList)
  };

  createNewRole = async () => {
    function roleBody(role_name,description, user_permissions) {
      return { role_name, description, user_permissions };
    }
    await this.props.createNewRole(
      roleBody(this.state.roleName, this.state.roleDescription, addedPermissionsList)
    );
  };


  getPermissionsList = async () => {
    this.setState({
      loading: true,
    });
    await this.props.getPermissions();
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
                  id="role-name"
                  className="form-control"
                  placeholder="Type role name"
                  onChange={this.createRoleDetails}
                />
              </div>
              <div className="col-sm-12 col-md-6 col-xl-6 mb-3">
                <label className="form-label">
                  Role Description
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <textarea
                  className="form-control"
                  id="role-description"
                  placeholder="Does not have role description"
                  rows="1"
                  onChange={this.createRoleDetails}
                ></textarea>
              </div>

              {this.state.loading ? (
                <PageLoadingSpinner />
              ) : (
                <div class="container">
                  <text>
                    Role Permissions
                    <Star
                      className="text-danger"
                      style={{ fontSize: "12px" }}
                    />
                  </text>
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
                <button className="btn" onClick={this.createNewRole}>
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
  let permissionsArrayed = Object.entries(
    state.userRolesAndPermissions.permissionsList
  );

  function createAllData(permissionGroup, permissionsList) {
    return { permissionGroup, permissionsList };
  }

  function createData(permissionName) {
    return { permissionName };
  }

  for (let x = 0; x < permissionsArrayed.length; x++) {
    let permissionsInGroupList = [];
    let permissionGroupName = permissionsArrayed[x][0];
    let arrayedSub = Object.entries(permissionsArrayed[x][1]);
    for (let y = 0; y < arrayedSub.length; y++) {
      let permissionName = arrayedSub[y][0];
      permissionsInGroupList[y] = createData(permissionName);
    }

    permissionList[x] = createAllData(
      permissionGroupName,
      permissionsInGroupList
    );
  }

  return {
    allPermissionsList: permissionList,
    message: state.userRolesAndPermissions.message,
  };
}

export default withRouter(connect(mapStateToProps, actions)(AddRole));
