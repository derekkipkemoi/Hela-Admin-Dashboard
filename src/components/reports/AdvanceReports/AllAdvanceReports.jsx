import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import RangeDatePicking from "../../datePicker/RangeDatePicking";
import appData from "../../appCommonData.json";
import Select from "react-select";

import SalaryAdvancesAndInterestDataTables from "./AdvanceReportsDataTables/SalaryAdvancesAndInterestDataTables";
import ActiveAdvancesDataTables from "./AdvanceReportsDataTables/ActiveAdvancesDataTables";
import AdvanceOverdueDataTables from "./AdvanceReportsDataTables/AdvanceOverdueDataTables";
import AdvanceDefaultersDataTables from "./AdvanceReportsDataTables/AdvanceDefaulters";
import SalaryAdvanceRepaidDataTables from "./AdvanceReportsDataTables/SalaryAdvanceRepaidDataTables";
import CompanySummaryReport from "./CompanySummaryReport";
const monthsOptions = appData.months;
const advanceReportsOptions = appData.AdvanceReportsCriteria;
const companiesOptions = appData.companies;

class AllAdvanceReports extends Component {
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

  handleMonthsChange = (selectedOptionValue) => {
    this.setState({ selectedOptionValue });
  };
  handleAdvanceCriteriaChange = (selectedOptionValue) => {
    this.setState({ selectedOptionValue });
  };
  handleCompaniesChange = (selectedOptionValue) => {
    this.setState({ selectedOptionValue });
  };
  render() {
    const styles = {
      container: (css) => ({ ...css, width: "200px" }),
    };
    const companystyles = {
      container: (css) => ({ ...css, width: "400px" }),
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
                <Link to={"/salaryadvancereports"}>Advance Reports</Link>
              </div>

              <li class="breadcrumb-item " aria-current="page">
                {this.props.location.pathname ===
                "/salaryadvancereports/advancereportssalaryadvance&interest" ? (
                  <span>Salary Adv. And Interest</span>
                ) : null}
                {this.props.location.pathname ===
                "/salaryadvancereports/advancereportsactiveadvance" ? (
                  <span>Active Advance</span>
                ) : null}
                {this.props.location.pathname ===
                "/salaryadvancereports/advancereportsadvanceoverdue" ? (
                  <span>Advance Overdue</span>
                ) : null}
                {this.props.location.pathname ===
                "/salaryadvancereports/advancereportsadvancedefaulters" ? (
                  <span>Advance Defaulters</span>
                ) : null}
                {this.props.location.pathname ===
                "/salaryadvancereports/advancereportssalaryadvancerepaid" ? (
                  <span>Salary Adv. Repaid</span>
                ) : null}
                {this.props.location.pathname ===
                "/salaryadvancereports/advancereportscompanysummaryreports" ? (
                  <span>Company Summary Report</span>
                ) : null}
              </li>
            </ol>
          </nav>
        </div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">
              {this.props.location.pathname ===
              "/salaryadvancereports/advancereportssalaryadvance&interest" ? (
                <span>Salary Adv. And Interest</span>
              ) : null}
              {this.props.location.pathname ===
              "/salaryadvancereports/advancereportsactiveadvance" ? (
                <span>Active Advance</span>
              ) : null}
              {this.props.location.pathname ===
              "/salaryadvancereports/advancereportsadvanceoverdue" ? (
                <span>Advance Overdue</span>
              ) : null}
              {this.props.location.pathname ===
              "/salaryadvancereports/advancereportsadvancedefaulters" ? (
                <span>Advance Defaulters</span>
              ) : null}
              {this.props.location.pathname ===
              "/salaryadvancereports/advancereportssalaryadvancerepaid" ? (
                <span>Salary Adv. Repaid</span>
              ) : null}
              {this.props.location.pathname ===
              "/salaryadvancereports/advancereportscompanysummaryreports" ? (
                <span>Company Summary Report</span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="all-advance-requests-holder">
          {this.props.location.pathname ===
          "/salaryadvancereports/advancereportssalaryadvance&interest" ? (
            <div className="row">
              <div className="d-flex col-12 col-md-4 col-xl-3 col-xxl-3 mt-2">
                <Select
                  options={monthsOptions}
                  onChange={this.handleMonthsChange}
                  placeholder="Select Period"
                  isMulti={false}
                  styles={styles}
                />
              </div>
              <div className="d-flex col-12 col-md-4 col-xl-3 col-xxl-3 mt-2">
                <Select
                  options={advanceReportsOptions}
                  onChange={this.handleAdvanceCriteriaChange}
                  placeholder="Select Company"
                  isMulti={false}
                  styles={styles}
                />
              </div>
              <div className="d-flex col-12 col-md-6 col-xl-6 col-xxl-6 mt-2">
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
                    className="dropdown-menu mt-1 p-2"
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

          {this.props.location.pathname === "/salaryadvancereports/advancereportscompanysummaryreports" ? (
            <div className="row">
              <div className="d-flex col-12 col-md-6 col-xl-6 col-xxl-6 mt-2">
                <Select
                  options={companiesOptions}
                  onChange={this.handleCompaniesChange}
                  placeholder="Select Company"
                  isMulti={false}
                  styles={companystyles}
                />
              </div>
              <div className="d-flex col-12 col-md-6 col-xl-6 col-xxl-6 mt-2">
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
            {this.props.location.pathname ===
            "/salaryadvancereports/advancereportssalaryadvance&interest" ? (
              <SalaryAdvancesAndInterestDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/salaryadvancereports/advancereportsactiveadvance" ? (
              <ActiveAdvancesDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/salaryadvancereports/advancereportsadvanceoverdue" ? (
              <AdvanceOverdueDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/salaryadvancereports/advancereportsadvancedefaulters" ? (
              <AdvanceDefaultersDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/salaryadvancereports/advancereportssalaryadvancerepaid" ? (
              <SalaryAdvanceRepaidDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/salaryadvancereports/advancereportscompanysummaryreports" ? (
              <CompanySummaryReport />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AllAdvanceReports);
