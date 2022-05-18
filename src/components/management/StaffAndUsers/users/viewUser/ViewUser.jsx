import { ArrowBack, Close, Star } from "@mui/icons-material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import appData from "../../../../appCommonData.json";
import UserDetails from "./UserDetails";
import UserFiles from "./UserFiles";
import UserSalaryAdvances from "./UserSalaryAdvances";

const rolesOptions = appData.roles;
const companyOptions = appData.companies;
const genderOptions = appData.gender;
const employmentOptions = appData.employment;

class ViewUser extends Component {
  state = {
    selectedOptionValue: null,
    currentTab: 0,
  };
  handleChange = (selectedOptionValue) => {
    this.setState({ selectedOptionValue }, () =>
      console.log(`Option selected:`, this.state.selectedOptionValue)
    );
  };

  changeTab = (currentTab) => {
    this.setState({
      currentTab: currentTab,
    });
  };
  render() {
    return (
      <div className="row add-section">
        <div className="fw-bold">Management</div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">User Details</div>
            <Link type="button" class="btn action-button" to={"/users"}>
              <ArrowBack />
              Back
            </Link>
          </div>
        </div>

        <div className="card">
          <div class="card-body">
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-start col-md-6">
                <button
                  className="btn-user-details"
                  onClick={(e) => this.changeTab(0)}
                >
                  User Details
                </button>
                <button
                  className="btn-user-details"
                  onClick={(e) => this.changeTab(1)}
                >
                  User Files
                </button>
                <button
                  className="btn-user-details"
                  onClick={(e) => this.changeTab(2)}
                >
                  User Salary Advances
                </button>
              </div>
              <div className="d-flex justify-content-end col-md-6">
                <Link className="button-approved" to={"/users/updateuser"}>
                  Update
                </Link>
                <button
                  className="button-locked"
                  data-bs-toggle="modal"
                  data-bs-target="#changeRoleUserModal"
                >
                  Change Role
                </button>
                <button
                  className="button-declined"
                  data-bs-toggle="modal"
                  data-bs-target="#deactivateUserModal"
                >
                  Deactivate
                </button>
                <button
                  className="button-approved"
                  data-bs-toggle="modal"
                  data-bs-target="#deactivateUserModal"
                >
                  Change User Type
                </button>
              </div>
            </div>

            {this.state.currentTab === 0 ? <UserDetails /> : null}
            {this.state.currentTab === 1 ? <UserFiles /> : null}
            {this.state.currentTab === 2 ? <UserSalaryAdvances /> : null}
          </div>
        </div>

        {/* approve user modal */}

        <div>
          <div
            class="modal fade"
            id="deactivateUserModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div className="card-modal">
                  <div class="modal-header">
                    <div class="delete-message-modal-title">
                      Deactivate User
                    </div>
                    <button
                      type="button"
                      className="close-modal-button"
                      data-bs-dismiss="modal"
                    >
                      <Close />
                    </button>
                  </div>
                  <div class="modal-body">
                    <div className="row">
                      <div className="row">
                      <div className="col">
                      <label class="form-label">User Status</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                      />
                      </div>
                      </div>

                     <div className="row">
                     <div className="col">
                     <label class="form-label">Reason</label>
                      <textarea
                        type="text"
                        className="form-control"
                        
                      />
                     </div>
                     </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="close-modal-button"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" class="confirm-modal-button">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* decline user modal */}
        <div>
          <div
            class="modal fade"
            id="changeRoleUserModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div className="card-modal">
                  <div class="modal-header">
                    <div class="locked-color-modal-title">Change User Role</div>
                    <button
                      type="button"
                      className="close-modal-button"
                      data-bs-dismiss="modal"
                    >
                      <Close />
                    </button>
                  </div>
                  <div class="modal-body">
                    <div className="row">
                      <p className="modal-message-header">
                        <u>Change Role</u>
                      </p>

                      <div className="row">
                        <div className="col">
                          <label class="form-label">
                            Role
                            <Star
                              className="text-danger"
                              style={{ fontSize: "12px" }}
                            />
                          </label>
                          <Select placeholder="Select user role" />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <label class="form-label">Email (Optional)</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter email"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="close-modal-button"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" class="confirm-modal-button">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUser;
