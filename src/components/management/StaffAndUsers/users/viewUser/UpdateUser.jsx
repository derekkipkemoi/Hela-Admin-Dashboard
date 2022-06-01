import { ArrowBack, Close, Star } from "@mui/icons-material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import appData from "../../../../appCommonData.json";
import OneDatePicker from "../../../../datePicker/OneDatePicker";

const rolesOptions = appData.roles;
const companyOptions = appData.companies;
const genderOptions = appData.gender;
const employmentOptions = appData.employment;

class UpdateUser extends Component {
  state = {
    selectedOptionValue: null,
  };
  handleChange = (selectedOptionValue) => {
    this.setState({ selectedOptionValue }, () =>
      console.log(`Option selected:`, this.state.selectedOptionValue)
    );
  };
  render() {
    return (
      <div className="row add-section">
        <div className="d-flex justify-content-between">
          <div className="fw-bold">Management</div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <div class="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </div>
              <div class="breadcrumb-item">
                <Link to={"/users"}>Users</Link>
              </div>
              <li class="breadcrumb-item " aria-current="page">
                Update User
              </li>
            </ol>
          </nav>
        </div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">Update User</div>
            {/* <Link type="button" class="btn action-button" to={"/users/viewuser"}>
              <ArrowBack />
              Back
            </Link> */}
          </div>
        </div>

        <div className="card">
          <div class="card-body">
            
            <div className="row">
              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">
                  First Name{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter first name"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Middle Name </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter middle name"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">
                  Surname{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter surname"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">
                  Email{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">
                  Date of Birth{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <OneDatePicker />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">
                  National Id{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter national ID"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">
                  Gender{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <Select
                  // value={selectedOption}
                  onChange={this.handleChange}
                  options={genderOptions}
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">
                  Phone{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">
                  Password{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">
                  Employed{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <Select
                  // value={selectedOption}
                  onChange={this.handleChange}
                  options={employmentOptions}
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">
                  Company{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <Select
                  // value={selectedOption}
                  onChange={this.handleChange}
                  options={companyOptions}
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">
                  Role{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <Select
                  // value={selectedOption}
                  onChange={this.handleChange}
                  options={rolesOptions}
                />
              </div>
            </div>

            <div className="row">
              <div className="col d-flex justify-content-end">
                <button className="btn">Confirm Changes</button>
              </div>
            </div>
          </div>
        </div>

        {/* approve user modal */}

        <div>
          <div
            class="modal fade"
            id="approveStaffModal"
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
                    <div class="approve-message-modal-title">Approve Staff</div>
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
                        <u>User Details</u>
                      </p>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">Name : </span>{" "}
                          <span className="modal-message-body">
                            {this.state.name}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">
                            National ID No :{" "}
                          </span>{" "}
                          <span className="modal-message-body">
                            {this.state.nationalId}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">
                            Phone Number :{" "}
                          </span>
                          <span className="modal-message-body">
                            {this.state.phone}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">
                            Company :{" "}
                          </span>
                          <span className="modal-message-body">
                            {this.state.company}
                          </span>
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
            id="declineStaffModal"
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
                    <div class="delete-message-modal-title">Decline Staff</div>
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
                        <u>User Details</u>
                      </p>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">Name : </span>{" "}
                          <span className="modal-message-body">
                            {this.state.name}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">
                            National ID No :{" "}
                          </span>{" "}
                          <span className="modal-message-body">
                            {this.state.nationalId}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">
                            Phone Number :{" "}
                          </span>
                          <span className="modal-message-body">
                            {this.state.phone}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">
                            Company :{" "}
                          </span>
                          <span className="modal-message-body">
                            {this.state.company}
                          </span>
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

export default UpdateUser;
