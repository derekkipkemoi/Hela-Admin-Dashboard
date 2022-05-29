import React, { Component } from "react";
import "../AdvanceRequests/advancerequests.css";
import { withRouter } from "react-router-dom";
import { ArrowUpward, Link } from "@mui/icons-material";
class TSCRequestsHolder extends Component {
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
        <div>
          <div className="header-reports-holder">TSC Requests</div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/alltscrequests")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  All TSC Requests
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

          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingtscrequests")
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

          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/paysliprequiredtsc")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Payslip Required TSC Requests
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

          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/payslipsharedtsc")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Payslip Shared TSC Requests
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

          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) => this.handleClick("/advancerequests/topuptsc")}
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Top Ups TSC Requests
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

          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) => this.handleClick("/advancerequests/bookedtsc")}
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Booked TSC Requests
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

          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/duedeligencetsc")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Due Diligence Advance Requests
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

          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/declinedfromrequeststsc")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Declined From Requests
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

          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/complianceadvancerequests")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Compliance Advance Requests
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

          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingdisbursmenttsc")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Pending Disbursement TSC Requests
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

          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/approvedtscrequests")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Approved TSC Requests
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

          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/tscpendingdeclinedrequests")
              }
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  TSC Pending Decline Advance Requests
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

          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) =>
                this.handleClick("/advancerequests/declinedrequeststsc")
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

          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) => this.handleClick("/advancerequests/tscsearch")}
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  TSC Search Requests
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

export default withRouter(TSCRequestsHolder);
