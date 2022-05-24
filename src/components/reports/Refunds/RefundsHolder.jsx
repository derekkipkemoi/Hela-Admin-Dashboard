import React, { Component } from "react";
import "../AdvanceRequests/advancerequests.css";
import { withRouter } from "react-router-dom";
import { ArrowUpward, Link } from "@mui/icons-material";
class RefundsHolder extends Component {
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
          <div className="header-reports-holder">Refunds</div>
        </div>

        <div className="row">
          {/* <div className="col-3">
            <button
              className="d-flex requests-holder-button"
              onClick={(e) => this.handleClick("/refunds/refundsrequests")}
            >
              Refunds Requests
              <div className="requests-holder-button-value">11</div>
            </button>
          </div> */}
          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) => this.handleClick("/refunds/refundsrequests")}
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Refunds Requests
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
              onClick={(e) => this.handleClick("/refunds/activerequests")}
            >
              Activated Refunds
              <div className="requests-holder-button-value">12</div>
            </button>
          </div> */}

          <div
            className="col-md-4 col-sm-6  col-xl-3 col-xxl-3 mb-3"
            onClick={(e) => this.handleClick("/refunds/activerequests")}
            role="button"
          >
            <div className="card text-dark p-3" style={cardBackgroundColor}>
              <div className="card-content">
                <div className="text-muted card-title float-start">
                  Activated Refunds
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

export default withRouter(RefundsHolder);
