import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import RangeDatePicking from "../../datePicker/RangeDatePicking";
import appData from "../../appCommonData.json";
import Select from "react-select";
import AllAdvanceRequestReportsDataTables from "../reportsDataTables/AllAdvanceRequestReportsDataTables";
const companiesOptions = appData.companies;
const advanceRequestStatusOptions = appData.status;

class AllAdvanceRequestsReports extends Component {
  state = {
    selectedCompanyOptionValue: "",
    selectedStatusOptionValue: "",
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

  handleCompaniesChange = (selectedCompanyOptionValue) => {
    this.setState({ selectedCompanyOptionValue });
  };

  handleStatusChange = (selectedStatusOptionValue) => {
    this.setState({ selectedStatusOptionValue });
  };

  render() {
    const styles = {
      container: (css) => ({ ...css, width: "300px" }),
    };
    return (
      <div>
        {/* <div className="fw-bold">Reports</div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">Advance Request Report</div>
            <Link
              type="button"
              class="btn action-button"
              to={"/advancerequests"}
            >
              <ArrowBack />
              Back
            </Link>
          </div>
        </div> */}

        <div className="d-flex justify-content-between">
          <div className="header-reports-holder">Advance Requests</div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <div class="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </div>
              <div class="breadcrumb-item">
                <Link to={"/advancerequests"}>Advance Requests</Link>
              </div>

              <li class="breadcrumb-item " aria-current="page">
              Advance Request Report
              </li>
            </ol>
          </nav>
        </div>
        <div className="all-advance-requests-holder">
          <div className="row">
            <div className="col col-sm-12 col-md-6 col-xl-4 col-xxl-3">
              <span>Status</span>
              <Select
                options={advanceRequestStatusOptions}
                onChange={this.handleStatusChange}
                placeholder="All Status"
                isMulti={false}
                styles={styles}
              />
            </div>
            <div className="col col-sm-12 col-md-6 col-xl-4 col-xxl-3">
              <span>Company</span>
              <Select
                options={companiesOptions}
                onChange={this.handleCompaniesChange}
                placeholder="All Companies"
                isMulti={false}
                styles={styles}
              />
            </div>
            <div className="col col-sm-12 col-md-6 col-xl-4 col-xxl-3">
              <span>Date Preset</span>
              <div className="reports-date-picker">
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
            </div>
            <div className="col col-sm-12 col-md-3 col-xl-3 col-xxl-3">
              <div className="all-reports-query-button mt-4">Smart Query</div>
            </div>
          </div>

          <AllAdvanceRequestReportsDataTables />
        </div>
      </div>
    );
  }
}

export default AllAdvanceRequestsReports;
