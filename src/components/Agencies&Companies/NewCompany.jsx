import { ArrowBack, Star } from "@mui/icons-material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import appData from "../appCommonData.json";
import OneDatePicker from "../datePicker/OneDatePicker";

const monthsOptions = appData.months;
const statusOptions = appData.state;
const staffOptions = appData.staff;

class NewCompany extends Component {
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
                <Link to={"/companies"}>Companies</Link>
              </div>
              <li class="breadcrumb-item " aria-current="page">
                Add New Company
              </li>
            </ol>
          </nav>
        </div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">Add New Company</div>
          </div>
        </div>

        <div className="card">
          <div class="card-body">
            <div className="row">
              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">Name </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-4">
                <label class="form-label">Reporting Date </label>
                <OneDatePicker />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Approval </label>
                <div className="d-flex">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="single"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label>Not Approved</label>

                  <input
                    class="form-check-input ms-4"
                    type="radio"
                    value="company"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label>Approved</label>
                </div>
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter address"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">Limit</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter limit"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">Int ( % )</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter int %"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">4 To 6 Months</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">7 To 9 Months</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">10 To 12 Months</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">13 To 15 Months</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">16 To 18 Months</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">19 To 21 Months</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">22 To 24 Months</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Code
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter code"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter location"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">Status</label>
                <Select
                  // value={selectedOption}
                  onChange={this.handleChange}
                  options={statusOptions}
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Type
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <Select
                  // value={selectedOption}
                  onChange={this.handleChange}
                  options={staffOptions}
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">Min Month</label>
                <Select
                  // value={selectedOption}
                  onChange={this.handleChange}
                  options={monthsOptions}
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">Max Month</label>
                <Select
                  // value={selectedOption}
                  onChange={this.handleChange}
                  options={monthsOptions}
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">Date of Agreement </label>
                <OneDatePicker />
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

export default NewCompany;
