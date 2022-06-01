import React, { Component } from "react";
import "./advancerequests.css";
import { Link as Linking } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ArrowUpward, Link } from "@mui/icons-material";
class AdvanceRequestsHolder extends Component {
  state = {};
  handleClick = (linkValue) => {
    this.props.history.push(linkValue);
  };

  render() {
    const cardBackgroundColor = {
      backgroundColor: "#fff",
    };

    const statTitle = {
      color: "#1a3353",
      fontSize: "15px",
    };

    const statValue = {
      color: "#1a3353",
    };

    const upwardarrowstyle = {
      color: "#0acf97",
    };

    const footerText = {
      color: "#72849a",
    };

    return (
      <div className="advance-requests-holder">
        <div className="d-flex justify-content-between">
          <div className="header-reports-holder">Advance Requests</div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <div class="breadcrumb-item">
                <Linking to={"/"}>Home</Linking>
              </div>

              <li class="breadcrumb-item " aria-current="page">
                Advance Requests
              </li>
            </ol>
          </nav>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/alladvancerequests")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  All Advance Requests
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingrequests")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Pending Requests
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingpayslipshared")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Pending Payslip Shared
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/payslipshared")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Payslip Shared
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/payrolldddpending")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Payroll DD-Pending
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/payrolldddone")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Payroll DD-Done
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/receivedfrompayroll")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Received from Payroll
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/revisedability")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Revised Ability
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) => this.handleClick("/advancerequests/notonpayroll")}
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Not On Payroll
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingddbooked")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Pending DD - Booked
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/declinedbyclients")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Declined By Clients
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) => this.handleClick("/advancerequests/stoporders")}
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Stop Orders
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) => this.handleClick("/advancerequests/compliance")}
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Compliance
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingdisbursment")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Pending Disbursment
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/approvedrequests")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Approved Requests
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/disbursedrequests")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Disbursed Requests
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingdeclinerequests")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Pending Decline Requests
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/declinedrequests")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Declined Requests
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/disbursmenterror")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Disbursment Error
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/topups")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Top Ups
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/uncaptureddisbursment")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Uncaptured Disbursment
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/alladvancerequestsreports")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Request Reports
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/requestsummary")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Requests Summary
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/searchrequests")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Search Requests
                </div>
                {/* <div className="float-end card-icon"><People/></div> */}
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold fs-3" style={statValue}>
                  24,850
                </div>
                <span className="ms-2" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span className="fw-bold" style={upwardarrowstyle}>
                  5.27%
                </span>
              </div>

              <div style={footerText}>Compare to last year (2020)</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AdvanceRequestsHolder);
