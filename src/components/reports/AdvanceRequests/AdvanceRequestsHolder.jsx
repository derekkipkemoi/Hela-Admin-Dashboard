import React, { Component } from "react";
import "./advancerequests.css";
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

    const upwardarrowstyle = {
      color: "#0acf97",
    };

    return (
      <div className="advance-requests-holder">
        <div className="row justify-content-md-center">
          <div className="header-reports-holder">Advance Requests</div>
        </div>

        <div className="row">
          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/alladvancerequests")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  All Advance Request
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">210</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/pendingrequests")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Pending Requests
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">24</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>
          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingpayslipshared")
              }
            >
              Pending Payslip Shared
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/pendingpayslipshared")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Pending Payslip Shared
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">123</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/payslipshared")
              }
            >
              Payslip Shared
              <div className="requests-holder-button-value">23</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) => this.handleClick("/advancerequests/payslipshared")}
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Payslip Shared
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/payrolldddpending")
              }
            >
              Payroll DD-Pending
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/payrolldddpending")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Payroll DD-Pending
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/payrolldddone")
              }
            >
              Payroll DD-Done
              <div className="requests-holder-button-value">1203</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) => this.handleClick("/advancerequests/payrolldddone")}
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Payroll DD-Done
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/receivedfrompayroll")
              }
            >
              Received from Payroll
              <div className="requests-holder-button-value">133</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/receivedfrompayroll")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Received from Payroll
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/revisedability")
              }
            >
              Revised Ability
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) => this.handleClick("/advancerequests/revisedability")}
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Revised Ability
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) => this.handleClick("/advancerequests/notonpayroll")}
            >
              Not On Payroll
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) => this.handleClick("/advancerequests/notonpayroll")}
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Not On Payroll
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingddbooked")
              }
            >
              Pending DD - Booked
              <div
                className="requests-holder-button-value"
                onClick={(e) =>
                  this.handleClick("/advancerequests/pendingrequests")
                }
              >
                123
              </div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/pendingddbooked")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Pending DD - Booked
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>
          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/declinedbyclients")
              }
            >
              Declined By Clients
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/declinedbyclients")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Declined By Clients
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) => this.handleClick("/advancerequests/stoporders")}
            >
              Stop Orders
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) => this.handleClick("/advancerequests/stoporders")}
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Stop Orders
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) => this.handleClick("/advancerequests/compliance")}
            >
              Compliance
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) => this.handleClick("/advancerequests/compliance")}
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Compliance
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingdisbursment")
              }
            >
              Pending Disbursment
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/pendingdisbursment")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Pending Disbursment
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/approvedrequests")
              }
            >
              Approved Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/approvedrequests")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Approved Requests
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/disbursedrequests")
              }
            >
              Disbursed Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/disbursedrequests")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Disbursed Requests
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingdeclinerequests")
              }
            >
              Pending Decline Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/pendingdeclinerequests")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Pending Decline Requests
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/declinedrequests")
              }
            >
              Declined Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/declinedrequests")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Declined Requests
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/disbursmenterror")
              }
            >
              Disbursment Error
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/disbursmenterror")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Disbursment Error
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/uncaptureddisbursment")
              }
            >
              Uncaptured Disbursment
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/uncaptureddisbursment")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Uncaptured Disbursment
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/alladvancerequestsreports")
              }
            >
              Request Reports
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/alladvancerequestsreports")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Request Reports
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/requestsummary")
              }
            >
              Requests Summary
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) => this.handleClick("/advancerequests/requestsummary")}
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Requests Summary
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>

          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/searchrequests")
              }
            >
              Search Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) => this.handleClick("/advancerequests/searchrequests")}
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Search Requests
                </div>
                <div className="float-end card-icon">
                  <Link />
                </div>
              </div>
              <div className="fw-bold fs-4">23</div>

              <div className="pt-3 text-muted">
                <span className="pe-2 fw-bold" style={upwardarrowstyle}>
                  <ArrowUpward />
                </span>
                <span style={upwardarrowstyle}>5.27%</span>
                <span className="ms-3">Since last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AdvanceRequestsHolder);
