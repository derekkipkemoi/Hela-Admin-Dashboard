import { ArrowBack, Star } from "@mui/icons-material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import appData from "../../../appCommonData.json";
import OneDatePicker from "../../../datePicker/OneDatePicker";

const rolesOptions = appData.roles;
const companyOptions = appData.companies;
const genderOptions = appData.gender;
const employmentOptions = appData.employment;

class NewStaff extends Component {
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
        <div className="fw-bold">Management</div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">Add New User</div>
            <Link
              type="button"
              class="btn action-button"
              to={"/users"}
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
                <button className="btn">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewStaff;
