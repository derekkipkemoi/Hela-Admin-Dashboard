import React, { Component } from "react";
import "./advancerequests.css";
import { withRouter } from "react-router-dom";
class AdvanceRequestsHolder extends Component {
  state = {};
  handleClick = (linkValue) => {
    this.props.history.push(linkValue);
  };

  render() {
    return (
      <div className="container advance-requests-holder">
        <div className="row justify-content-md-center">
          <div className="header-reports-holder">Advance Requests</div>
          <hr />
        </div>

        <div className="row">
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/alladvancerequests")
              }
            >
              All Advance Requests
              <div className="requests-holder-button-value">3213</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingrequests")
              }
            >
              Pending Requests
              <div className="requests-holder-button-value">12</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingpayslipshared")
              }
            >
              Pending Payslip Shared
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/payslipshared")
              }
            >
              Payslip Shared
              <div className="requests-holder-button-value">23</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/payrolldddpending")
              }
            >
              Payroll DD-Pending
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/payrolldddone")
              }
            >
              Payroll DD-Done
              <div className="requests-holder-button-value">1203</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/receivedfrompayroll")
              }
            >
              Received from Payroll
              <div className="requests-holder-button-value">133</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/revisedability")
              }
            >
              Revised Ability
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) => this.handleClick("/advancerequests/notonpayroll")}
            >
              Not On Payroll
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
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
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/declinedbyclients")
              }
            >
              Declined By Clients
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) => this.handleClick("/advancerequests/stoporders")}
            >
              Stop Orders
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) => this.handleClick("/advancerequests/compliance")}
            >
              Compliance
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingdisbursment")
              }
            >
              Pending Disbursment
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/approvedrequests")
              }
            >
              Approved Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/disbursedrequests")
              }
            >
              Disbursed Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/pendingdeclinerequests")
              }
            >
              Pending Decline Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/declinedrequests")
              }
            >
              Declined Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>

          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/disbursmenterror")
              }
            >
              Disbursment Error
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/uncaptureddisbursment")
              }
            >
              Uncaptured Disbursment
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/alladvancerequestsreports")
              }
            >
              Request Reports
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/requestsummary")
              }
            >
              Requests Summary
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) =>
                this.handleClick("/advancerequests/searchrequests")
              }
            >
              Search Requests
              <div className="requests-holder-button-value">123</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AdvanceRequestsHolder);
