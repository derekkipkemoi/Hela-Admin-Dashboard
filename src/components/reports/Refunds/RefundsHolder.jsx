import React, { Component } from "react";
import "../AdvanceRequests/advancerequests.css";
import { withRouter } from "react-router-dom";
class RefundsHolder extends Component {
  state = {};
  handleClick = (linkValue) => {
    this.props.history.push(linkValue);
  };

  render() {
    return (
      <div className="container advance-requests-holder">
        <div className="row justify-content-md-center">
          <div className="header-reports-holder">Refunds</div>
          <hr />
        </div>

        <div className="row">
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) => this.handleClick("/refunds/refundsrequests")}
            >
              Refunds Requests
              <div className="requests-holder-button-value">11</div>
            </button>
          </div>
          <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) => this.handleClick("/refunds/activerequests")}
            >
              Activated Refunds
              <div className="requests-holder-button-value">12</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RefundsHolder);
