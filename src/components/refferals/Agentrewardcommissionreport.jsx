import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import RangeDatePicking from "../datePicker/RangeDatePicking";
import "./refferals.css"
class AgentRewardCommissionReport extends Component {
  state = {
    selectedOptionValue: "",
    endDate: new Date().toDateString(),
    startDate: new Date(
      new Date().setDate(new Date().getDate() - 30)
    ).toDateString(),
  };

  onDateChange = (startDate, endDate) => {
    this.setState({
      endDate: endDate.toDateString(),
      startDate: startDate.toDateString(),
    });
  };

  changeDate = (value) => {
    if (value === "Today") {
      this.setState({
        endDate: new Date().toDateString(),
        startDate: new Date().toDateString(),
      });
    }
    if (value === "YesterDay") {
      this.setState({
        endDate: new Date().toDateString(),
        startDate: new Date(
          new Date().setDate(new Date().getDate() - 1)
        ).toDateString(),
      });
    }
    if (value === "7") {
      this.setState({
        endDate: new Date().toDateString(),
        startDate: new Date(
          new Date().setDate(new Date().getDate() - 7)
        ).toDateString(),
      });
    }
    if (value === "30") {
      this.setState({
        endDate: new Date().toDateString(),
        startDate: new Date(
          new Date().setDate(new Date().getDate() - 30)
        ).toDateString(),
      });
    }
  };

  render() {
    return (
      <div>
        <div className="all-advance-requests-holder">
          <div className="row">
            <div className="d-flex col-12 col-md-6 col-xl-6 col-xxl-6 mt-2">
                <span className="me-3">Phone</span>
              <input type="text" className="refferal-phone-input"/>
            </div>
          </div>
          <div className="row">
            <div className="d-flex col-12 col-md-6 col-xl-6 col-xxl-4 mt-2">
              <div class="btn-group reports-date-picker">
                <div
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownPickDateRange"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  {this.state.startDate} - {this.state.endDate}
                </div>
                <div
                  className="dropdown-menu mt-3 p-2"
                  aria-labelledby="dropdownPickDateRange"
                >
                  <span>Date Preset</span>
                  <hr className="m-0 p-0" />
                  <div
                    className="advance-requests-selector"
                    onClick={(e) => this.changeDate("Today")}
                  >
                    Today
                  </div>
                  <div
                    className="advance-requests-selector"
                    onClick={(e) => this.changeDate("YesterDay")}
                  >
                    Yesterday
                  </div>
                  <div
                    className="advance-requests-selector"
                    onClick={(e) => this.changeDate("7")}
                  >
                    Last 7 Days
                  </div>
                  <div
                    className="advance-requests-selector"
                    onClick={(e) => this.changeDate("30")}
                  >
                    Last 30 Days
                  </div>
                  <RangeDatePicking onDateChange={this.onDateChange} />
                </div>
              </div>
              <button className="reports-query-button ms-1">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AgentRewardCommissionReport);
