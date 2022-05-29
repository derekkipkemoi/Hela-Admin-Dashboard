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
          <div className="header-reports-holder">Refunds</div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-3 mb-3">
            <div
              className="card border text-dark p-4"
              style={cardBackgroundColor}
              onClick={(e) => this.handleClick("/refunds/refundsrequests")}
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Refunds Requests
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
              onClick={(e) => this.handleClick("/refunds/activerequests")}
              role="button"
            >
              <div className="card-content">
                <div
                  className="fw-bold card-title float-start"
                  style={statTitle}
                >
                  Activated Refunds
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

export default withRouter(RefundsHolder);
