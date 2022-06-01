import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import RangeDatePicking from "../../datePicker/RangeDatePicking";
import appData from "../../appCommonData.json";
import Select from "react-select";
import ActiveLoansDataTables from "./mobiLoansDataTables/ActiveLoansDataTables";
import OverDueLoansDataTables from "./mobiLoansDataTables/OverdueLoansDataTables";
import LoanDefaultersDataTables from "./mobiLoansDataTables/LoanDefaultersDataTables";
import RepaidLoansDataTables from "./mobiLoansDataTables/RepaidLoansDataTables";

const LoansCriteria = appData.LoansCriteria;

class AllTSCRequests extends Component {
  state = {
    requestStatus: null,
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

  handleLoansCriteriaChange = (selectedOptionValue) => {
    this.setState({ selectedOptionValue });
  };
  render() {
    const styles = {
      container: (css) => ({ ...css, width: "250px" }),
    };
    return (
      <div>
        <div className="d-flex justify-content-between">
          <div className="header-reports-holder">Reports</div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <div class="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </div>
              <div class="breadcrumb-item">
                <Link to={"/mobiloans"}>MobiLoans</Link>
              </div>

              <li class="breadcrumb-item " aria-current="page">
                {this.props.location.pathname ===
                "/mobiloans/generalreports" ? (
                  <span>General Reports</span>
                ) : null}
                {this.props.location.pathname === "/mobiloans/activeloans" ? (
                  <span>Active Loans</span>
                ) : null}
                {this.props.location.pathname === "/mobiloans/overdueloans" ? (
                  <span>Overdue Loans</span>
                ) : null}
                {this.props.location.pathname ===
                "/mobiloans/loandefaulters" ? (
                  <span>Loans Defaulters</span>
                ) : null}
                {this.props.location.pathname === "/mobiloans/repaidloans" ? (
                  <span>Repaid Loans</span>
                ) : null}
              </li>
            </ol>
          </nav>
        </div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">
              {this.props.location.pathname === "/mobiloans/generalreports" ? (
                <span>General Reports</span>
              ) : null}
              {this.props.location.pathname === "/mobiloans/activeloans" ? (
                <span>Active Loans</span>
              ) : null}
              {this.props.location.pathname === "/mobiloans/overdueloans" ? (
                <span>Overdue Loans</span>
              ) : null}
              {this.props.location.pathname === "/mobiloans/loandefaulters" ? (
                <span>Loans Defaulters</span>
              ) : null}
              {this.props.location.pathname === "/mobiloans/repaidloans" ? (
                <span>Repaid Loans</span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="all-advance-requests-holder">
          {this.props.location.pathname === "/mobiloans/generalreports" ? (
            <div className="row">
              <div className="d-flex col-12 col-md-6 col-xl-6 col-xxl-4 mt-2">
                <Select
                  options={LoansCriteria}
                  onChange={this.handleLoansCriteriaChange}
                  placeholder="Select Criteria"
                  isMulti={false}
                  styles={styles}
                />
              </div>
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
                <button className="reports-query-button ms-1">
                  Smart Query
                </button>
              </div>
            </div>
          ) : null}

          <div>
            {this.props.location.pathname === "/mobiloans/generalreports" ? (
              <ActiveLoansDataTables  />
            ) : null}
            {this.props.location.pathname === "/mobiloans/activeloans" ? (
              <ActiveLoansDataTables />
            ) : null}
            {this.props.location.pathname === "/mobiloans/overdueloans" ? (
              <OverDueLoansDataTables/>
            ) : null}
            {this.props.location.pathname === "/mobiloans/loandefaulters" ? (
              <LoanDefaultersDataTables />
            ) : null}
            {this.props.location.pathname === "/mobiloans/repaidloans" ? (
              <RepaidLoansDataTables />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AllTSCRequests);
