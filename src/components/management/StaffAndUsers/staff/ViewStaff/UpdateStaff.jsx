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

class UpdateStaff extends Component {
  state = {
    selectedOption: "pending",
    selectedOptionValue: null,
  };
  handleChange = (selectedOptionValue) => {
    this.setState({ selectedOptionValue });
  };

  onChangeRadioValue = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
    console.log(`Option selected:`, event.target.value);
  };

  render() {
    return (
      <div className="row add-section">
        <div className="fw-bold">Management</div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">Update Staff</div>
            <Link
              type="button"
              class="btn action-button"
              to={"/staff/viewstaff"}
            >
              <ArrowBack />
              Back
            </Link>
          </div>
        </div>

        <div className="card">
          <div class="card-body">
            <div className="row">
              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">First Name </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Middle Name </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="middle Name"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Surname </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Surname"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Payroll </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Gross Salary </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gross Salary"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Net Salary </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Net Salary"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Status </label>
                <div className="d-flex justify-content-start">
                  <div className="single-radio-checkbox p-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="pending"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked={this.state.selectedOption === "pending"}
                      onChange={this.onChangeRadioValue}
                    />
                    <label class="form-check-label">Pending</label>
                  </div>
                  <div class="company-radio-checkbox p-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="declined"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked={this.state.selectedOption === "declined"}
                      onChange={this.onChangeRadioValue}
                    />
                    <label class="form-check-label">Declined</label>
                  </div>
                  <div class="company-radio-checkbox p-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="approved"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked={this.state.selectedOption === "approved"}
                      onChange={this.onChangeRadioValue}
                    />
                    <label class="form-check-label">Approved</label>
                  </div>
                  <hr />
                </div>
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Department </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Department"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Position </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Position"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Limit </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Limit"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Company </label>
                <Select
                  // value={selectedOption}
                  onChange={this.handleChange}
                  options={companyOptions}
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

export default UpdateStaff;
