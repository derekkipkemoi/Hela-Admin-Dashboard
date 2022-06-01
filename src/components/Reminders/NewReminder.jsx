import { ArrowBack, Star } from "@mui/icons-material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import appData from "../appCommonData.json";


const typeOptions = appData.remindersType;
const statusOptions = appData.remindersStatus;


class NewReminder extends Component {
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
          <div className="fw-bold">Reminders</div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <div class="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </div>
              <div class="breadcrumb-item">
                <Link to={"/reminders"}>Reminders</Link>
              </div>
              <li class="breadcrumb-item " aria-current="page">
                New Reminder
              </li>
            </ol>
          </nav>
        </div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">Add New Reminder</div>
          </div>
        </div>

        <div className="card">
          <div class="card-body">
            <div className="row">
              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Days</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="2,3,4,5,6 ... If no day are needed set 0"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Target </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter target"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Text</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter text"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Type</label>
                <Select
                  // value={selectedOption}
                  onChange={this.handleChange}
                  options={typeOptions}
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone"
                />
              </div>

              <div class="col-sm-12 col-md-4 col-xl-4 mb-3">
                <label class="form-label">Status</label>
                <Select
                  // value={selectedOption}
                  onChange={this.handleChange}
                  options={statusOptions}
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

export default NewReminder;
