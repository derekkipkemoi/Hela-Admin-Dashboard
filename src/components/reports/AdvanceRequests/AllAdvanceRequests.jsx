import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import RangeDatePicking from "../../datePicker/RangeDatePicking";
import appData from "../../appCommonData.json";
import Select from "react-select";
import AllRequestsDataTables from "../reportsDataTables/AllRequestsDataTables";
import ApprovedRequestsDataTables from "../reportsDataTables/ApprovedRequestsDataTables";
import PendingRequestsDataTables from "../reportsDataTables/PendingRequestsDataTables";
import DeclinedByClientsDataTables from "../reportsDataTables/DeclinedByClientsDataTables";
import DeclinedRequestsDataTables from "../reportsDataTables/DeclinedRequestsDataTables";
import DisbursedRequestsDataTables from "../reportsDataTables/DisbursedRequestsDataTables";
import DisbursmentErrorDataTables from "../reportsDataTables/DisbursmentErrorDataTables";
import NotonPayrollDataTables from "../reportsDataTables/NotonPayrollDataTables";
import PayrollDDDoneDataTables from "../reportsDataTables/PayrollDDDoneDataTables";
import PayrollDDpendingDataTables from "../reportsDataTables/PayrollDDPendingDataTables";
import PayslipSharedDataTables from "../reportsDataTables/PayslipSharedDataTables";
import PendingDDBookedDataTables from "../reportsDataTables/PendingDDBookedDataTables";
import PendingDeclineRequestsDataTables from "../reportsDataTables/PendingDeclineRequestsDataTables";
import PendingDisbursmentDataTables from "../reportsDataTables/PendingDisbursmentDataTables";
import PendingPayslipSharedDataTables from "../reportsDataTables/PendingPayslipSharedDataTables";
import ReceivedfromPayrollDataTables from "../reportsDataTables/ReceivedfromPayrollDataTables";
import RevisedAbilityDataTables from "../reportsDataTables/RevisedAbilityDataTables";
import StopOrdersDataTables from "../reportsDataTables/StopOrdersDataTables";
import ComplianceDataTables from "../reportsDataTables/ComplianceDataTables";
import TopUpsDataTables from "../reportsDataTables/TopUpsDataTables";
const companiesOptions = appData.companies;

class AllAdvanceRequests extends Component {
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
                {this.props.location.pathname ===
                "/advancerequests/alladvancerequests" ? (
                  <span>All Advance Requests</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/pendingrequests" ? (
                  <span>Pending Requests</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/pendingpayslipshared" ? (
                  <span>Pending Payslip Shared</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/payslipshared" ? (
                  <span>Payslip Shared</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/payrolldddpending" ? (
                  <span>Payroll DD-Pending</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/payrolldddone" ? (
                  <span>Payroll DD-Done</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/receivedfrompayroll" ? (
                  <span>Received from Payroll</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/revisedability" ? (
                  <span>Revised Ability</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/notonpayroll" ? (
                  <span>Not on Payroll</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/pendingddbooked" ? (
                  <span>Pending DD-Booked</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/declinedbyclients" ? (
                  <span>Declined By Clients</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/stoporders" ? (
                  <span>Stop Orders</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/compliance" ? (
                  <span>Compliance</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/pendingdisbursment" ? (
                  <span>Pending Disbursment</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/approvedrequests" ? (
                  <span>Approved Requests</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/disbursedrequests" ? (
                  <span>Disbursed Requests</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/pendingdeclinerequests" ? (
                  <span>Pending Decline Requests</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/declinedrequests" ? (
                  <span>Declined Requests</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/disbursmenterror" ? (
                  <span>Disbursment Error</span>
                ) : null}
                {this.props.location.pathname ===
                "/advancerequests/topups" ? (
                  <span>Top Ups</span>
                ) : null}
              </li>
            </ol>
          </nav>
        </div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">
              {this.props.location.pathname ===
              "/advancerequests/alladvancerequests" ? (
                <span>All Advance Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/pendingrequests" ? (
                <span>Pending Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/pendingpayslipshared" ? (
                <span>Pending Payslip Shared</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/payslipshared" ? (
                <span>Payslip Shared</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/payrolldddpending" ? (
                <span>Payroll DD-Pending</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/payrolldddone" ? (
                <span>Payroll DD-Done</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/receivedfrompayroll" ? (
                <span>Received from Payroll</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/revisedability" ? (
                <span>Revised Ability</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/notonpayroll" ? (
                <span>Not on Payroll</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/pendingddbooked" ? (
                <span>Pending DD-Booked</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/declinedbyclients" ? (
                <span>Declined By Clients</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/stoporders" ? (
                <span>Stop Orders</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/compliance" ? (
                <span>Compliance</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/pendingdisbursment" ? (
                <span>Pending Disbursment</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/approvedrequests" ? (
                <span>Approved Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/disbursedrequests" ? (
                <span>Disbursed Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/pendingdeclinerequests" ? (
                <span>Pending Decline Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/declinedrequests" ? (
                <span>Declined Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/disbursmenterror" ? (
                <span>Disbursment Error</span>
              ) : null}
              {this.props.location.pathname ===
              "/advancerequests/topups" ? (
                <span>Top Ups</span>
              ) : null}
            </div>
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
              <Select
                options={companiesOptions}
                onChange={this.handleCompaniesChange}
                placeholder="Select Company"
                isMulti={false}
                styles={styles}
              />
              <button className="reports-query-button ms-1">
                Assume Client Role
              </button>
            </div>
            {/* <div className="col-12 col-md-6 col-xl-6 col-xxl-4 mt-2 ">
              <input
                placeholder="Past Requests (Over 10 days)"
                className="reports-past-request-form"
              />
            </div> */}
          </div>

          <div>
            {this.props.location.pathname ===
            "/advancerequests/alladvancerequests" ? (
              <AllRequestsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/pendingrequests" ? (
              <PendingRequestsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/pendingpayslipshared" ? (
              <PendingPayslipSharedDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/payslipshared" ? (
              <PayslipSharedDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/payrolldddpending" ? (
              <PayrollDDpendingDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/payrolldddone" ? (
              <PayrollDDDoneDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/receivedfrompayroll" ? (
              <ReceivedfromPayrollDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/revisedability" ? (
              <RevisedAbilityDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/notonpayroll" ? (
              <NotonPayrollDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/pendingddbooked" ? (
              <PendingDDBookedDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/declinedbyclients" ? (
              <DeclinedByClientsDataTables />
            ) : null}
            {this.props.location.pathname === "/advancerequests/stoporders" ? (
              <StopOrdersDataTables />
            ) : null}
            {this.props.location.pathname === "/advancerequests/compliance" ? (
              <ComplianceDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/pendingdisbursment" ? (
              <PendingDisbursmentDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/approvedrequests" ? (
              <ApprovedRequestsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/disbursedrequests" ? (
              <DisbursedRequestsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/pendingdeclinerequests" ? (
              <PendingDeclineRequestsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/declinedrequests" ? (
              <DeclinedRequestsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/disbursmenterror" ? (
              <DisbursmentErrorDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/advancerequests/topups" ? (
              <TopUpsDataTables />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AllAdvanceRequests);
