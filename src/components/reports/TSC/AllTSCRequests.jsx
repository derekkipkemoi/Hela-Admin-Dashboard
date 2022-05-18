import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import RangeDatePicking from "../../datePicker/RangeDatePicking";
import appData from "../../appCommonData.json";
import Select from "react-select";

import ALLTSCRequestsDataTables from "./TSCReportsDataTables/AllTSCRequestsDataTables"
import ApprovedTSCRequestsDataTables from "./TSCReportsDataTables/ApprovedTSCRequestsDataTables"
import BookedTScRequestsDataTables from "./TSCReportsDataTables/BookedTSCRequestsDataTables"
import ComplianceAdvanceRequestsDataTables from "./TSCReportsDataTables/ComplianceAdvanceRequestsDataTables"
import DeclinedFromRequestsDataTables from "./TSCReportsDataTables/DeclinedFromRequestsDataTables"
import DeclinedRequestsDataTables from "./TSCReportsDataTables/DeclinedRequestsDataTables"
import DueDeligenceAdvanceRequestsDataTables from "./TSCReportsDataTables/DueDiligenceAdvanceRequestsDataTables"
import PayslipRequiredTSCRequiredDataTables from "./TSCReportsDataTables/PayslipRequiredTSCRequestsDataTables"
import PayslipSharedTSCRequestsDataTables from "./TSCReportsDataTables/PayslipSharedTSCRequestsDataTables"
import PendingDisbursmentTSCRequestDataTable from "./TSCReportsDataTables/PendingDisbursmentTSCRequestsDataTables"
import PendingRequestsDataTables from "./TSCReportsDataTables/PendingRequestsDataTables"
import TopUpsTSCRequestDataTables from "./TSCReportsDataTables/TopUpsTSCRequestsDataTables"
import TSCPendingDeclineAdvanceRequestDataTables from "./TSCReportsDataTables/TSCPendingDeclineAdvanceRequestsDataTables"
import TSCSearchRequests from "./TSCSearchRequests"
const companiesOptions = appData.companies;

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

  handleCompaniesChange = (selectedOptionValue) => {
    this.setState({ selectedOptionValue });
  };
  render() {
    const styles = {
      container: (css) => ({ ...css, width: "300px" }),
    };
    return (
      <div>
        <div className="fw-bold">Reports</div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">
              {this.props.location.pathname ===
              "/advancerequests/alltscrequests" ? (
                <span>All TSC Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/pendingtscrequests" ? (
                <span>Pending Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/paysliprequiredtsc" ? (
                <span>Payslip Required TSC Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/payslipsharedtsc" ? (
                <span>Payslip Shared TSC Requests</span>
              ) : null}
              {this.props.location.pathname === "/advancerequests/topuptsc" ? (
                 <span>Top Ups TSC Requests</span>
              ) : null}
              {this.props.location.pathname === "/advancerequests/bookedtsc" ? (
                 <span>Booked TSC Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/duedeligencetsc" ? (
                <span>Due Diligence Advance Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/declinedfromrequeststsc" ? (
                <span>Declined From Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/complianceadvancerequests" ? (
                <span>Compliance Advance Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/pendingdisbursmenttsc" ? (
                <span>Pending Disbursement TSC Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/approvedtscrequests" ? (
                <span> Approved TSC Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/tscpendingdeclinedrequests" ? (
                <span>TSC Pending Decline Advance Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/declinedrequeststsc" ? (
                <span> Declined Requests</span>
              ) : null}
              {this.props.location.pathname === "/advancerequests/tscsearch" ? (
                 <span>TSC Search Requests</span>
              ) : null}
            </div>
            <Link
              type="button"
              class="btn action-button"
              to={"/tscrequests"}
            >
              <ArrowBack />
              Back
            </Link>
          </div>
        </div>
        <div className="all-advance-requests-holder">
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
              <button className="reports-query-button ms-1">Smart Query</button>
            </div>
            <div className="d-flex col-12 col-md-6 col-xl-6 col-xxl-4 mt-2">
              <button className="reports-query-button ms-1">
                Payroll is Active
              </button>
            </div>
          </div>

          <div>
            {this.props.location.pathname ===
            "/advancerequests/alltscrequests" ? (
              <ALLTSCRequestsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/pendingtscrequests" ? (
              <PendingRequestsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/paysliprequiredtsc" ? (
              <PayslipRequiredTSCRequiredDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/payslipsharedtsc" ? (
              <PayslipSharedTSCRequestsDataTables />
            ) : null}
            {this.props.location.pathname === "/advancerequests/topuptsc" ? (
              <TopUpsTSCRequestDataTables />
            ) : null}
            {this.props.location.pathname === "/advancerequests/bookedtsc" ? (
              <BookedTScRequestsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/duedeligencetsc" ? (
              <DueDeligenceAdvanceRequestsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/declinedfromrequeststsc" ? (
              <DeclinedFromRequestsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/complianceadvancerequests" ? (
              <ComplianceAdvanceRequestsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/pendingdisbursmenttsc" ? (
              <PendingDisbursmentTSCRequestDataTable />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/approvedtscrequests" ? (
              <ApprovedTSCRequestsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/tscpendingdeclinedrequests" ? (
              <TSCPendingDeclineAdvanceRequestDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/declinedrequeststsc" ? (
              <DeclinedRequestsDataTables />
            ) : null}
            {this.props.location.pathname === "/advancerequests/tscsearch" ? (
              <TSCSearchRequests />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AllTSCRequests);
