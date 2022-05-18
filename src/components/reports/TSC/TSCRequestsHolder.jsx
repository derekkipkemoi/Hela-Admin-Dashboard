import React, { Component } from "react";
import "../AdvanceRequests/advancerequests.css";
import { withRouter } from "react-router-dom";
class TSCRequestsHolder extends Component {
  state = {};
  handleClick = (linkValue) => {
    this.props.history.push(linkValue);
  };

  render() {
    return (
      <div className="container advance-requests-holder">
        <div className="row justify-content-md-center">
          <div className="header-reports-holder">TSC Requests</div>
          <hr />
        </div>
       
        <div className="row">
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/alltscrequests")
              }
            >
              All TSC Requests
              <div className="requests-holder-button-value">3213</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingtscrequests")
              }
            >
              Pending Requests
              <div className="requests-holder-button-value">12</div>
            </button>
          </div>
          <div className="col-4">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/paysliprequiredtsc")
              }
            >
              Payslip Required TSC Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/payslipsharedtsc")
              }
            >
              Payslip Shared TSC Requests
              <div className="requests-holder-button-value">23</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) => this.handleClick("/advancerequests/topuptsc")}
            >
              Top Ups TSC Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) => this.handleClick("/advancerequests/bookedtsc")}
            >
              Booked TSC Requests
              <div className="requests-holder-button-value">1203</div>
            </button>
          </div>
          <div className="col-4">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/duedeligencetsc")
              }
            >
              Due Diligence Advance Requests
              <div className="requests-holder-button-value">133</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/declinedfromrequeststsc")
              }
            >
              Declined From Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-4">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/complianceadvancerequests")
              }
            >
              Compliance Advance Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-4">
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
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/approvedtscrequests")
              }
            >
              Approved TSC Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-4">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/tscpendingdeclinedrequests")
              }
            >
              TSC Pending Decline Advance Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/declinedrequeststsc")
              }
            >
              Declined Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>

          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) => this.handleClick("/advancerequests/tscsearch")}
            >
              TSC Search Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TSCRequestsHolder);
