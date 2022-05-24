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

    const upwardarrowstyle = {
      color: "#0acf97",
    };

    return (
      <div className="advance-requests-holder">
        <div className="row justify-content-md-center">
          <div className="header-reports-holder">TSC Requests</div>
        </div>

        <div className="row">
          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/alltscrequests")
              }
            >
              All TSC Requests
              <div className="requests-holder-button-value">3213</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) => this.handleClick("/advancerequests/alltscrequests")}
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  All TSC Requests
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
                this.handleClick("/advancerequests/pendingtscrequests")
              }
            >
              Pending Requests
              <div className="requests-holder-button-value">12</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/pendingtscrequests")
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

          {/* <div className="col-4">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/paysliprequiredtsc")
              }
            >
              Payslip Required TSC Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/paysliprequiredtsc")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Payslip Required TSC Requests
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
                this.handleClick("/advancerequests/payslipsharedtsc")
              }
            >
              Payslip Shared TSC Requests
              <div className="requests-holder-button-value">23</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/payslipsharedtsc")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Payslip Shared TSC Requests
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
              onClick={(e) => this.handleClick("/advancerequests/topuptsc")}
            >
              Top Ups TSC Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) => this.handleClick("/advancerequests/topuptsc")}
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Top Ups TSC Requests
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
              onClick={(e) => this.handleClick("/advancerequests/bookedtsc")}
            >
              Booked TSC Requests
              <div className="requests-holder-button-value">1203</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) => this.handleClick("/advancerequests/bookedtsc")}
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Booked TSC Requests
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

          {/* <div className="col-4">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/duedeligencetsc")
              }
            >
              Due Diligence Advance Requests
              <div className="requests-holder-button-value">133</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/duedeligencetsc")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Due Diligence Advance Requests
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
                this.handleClick("/advancerequests/declinedfromrequeststsc")
              }
            >
              Declined From Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/declinedfromrequeststsc")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Declined From Requests
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

          {/* <div className="col-4">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/complianceadvancerequests")
              }
            >
              Compliance Advance Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/complianceadvancerequests")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Compliance Advance Requests
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

          {/* <div className="col-4">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingdisbursmenttsc")
              }
            >
              Pending Disbursement TSC Requests
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
              this.handleClick("/advancerequests/pendingdisbursmenttsc")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Pending Disbursement TSC Requests
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
                this.handleClick("/advancerequests/approvedtscrequests")
              }
            >
              Approved TSC Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/approvedtscrequests")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Approved TSC Requests
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

          {/* <div className="col-4">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/tscpendingdeclinedrequests")
              }
            >
              TSC Pending Decline Advance Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/tscpendingdeclinedrequests")
            }
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  TSC Pending Decline Advance Requests
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
                this.handleClick("/advancerequests/declinedrequeststsc")
              }
            >
              Declined Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) =>
              this.handleClick("/advancerequests/declinedrequeststsc")
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
              onClick={(e) => this.handleClick("/advancerequests/tscsearch")}
            >
              TSC Search Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) => this.handleClick("/advancerequests/tscsearch")}
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  TSC Search Requests
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

export default withRouter(TSCRequestsHolder);
