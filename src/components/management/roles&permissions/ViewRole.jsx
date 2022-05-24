import { ArrowBack, Star } from "@mui/icons-material";
import { Link, withRouter } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import "../management.css";



class ViewRole extends Component {
  state = {
    roleName: this.props.location.state.role,
    roleDescription: this.props.location.state.description,
  };

  componentDidMount = () => {
    this.setState({
      roleName: this.props.location.state.role,
      roleDescription: this.props.location.state.description,
    });
    this.getRoleDetails();
  };

  getRoleDetails = async () => {
    await this.props.getRoleDetails(this.state.roleName);
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
      // let permission = Object.entries(assignedPermissions[assign_permission]);
      // console.log("Hallo", assignedPermissions[assign_permission][1]);

      permissionsNames.push(assignedPermissions[assign_permission][0]);
      const output = Object.entries(
        assignedPermissions[assign_permission][1]
      ).map(([key, value]) => ({
        key,
        value,
      }));
      permissionsDescriptions.push(output);
    }

    console.log("Names", assignedPermissions);
    console.log("Names", permissionsNames);
    console.log("Description", permissionsDescriptions);

    return (
      <div className="row add-section">
        <div className="fw-bold">Management</div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">Role Details</div>
            <Link
              type="button"
              class="btn action-button"
              to={"/rolespermissions"}
            >
              <ArrowBack />
              Back
            </Link>
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

              <div class="container">
                <text>Role Permissions</text>
                <hr />
                {assignedPermissions.map((permission, index) => {
                  return (
                    <div className="mt-3">
                      <text className="fw-bold permission-header">
                        {permissionsNames[index]}
                      </text>
                      <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 ">
                        {permissionsDescriptions[index].map(
                          (permissionDescription, index1) => {
                            return (
                              <div class="col">
                                <div class="p-3 border mt-0 permission-description">
                                  {permissionDescription.value}
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
