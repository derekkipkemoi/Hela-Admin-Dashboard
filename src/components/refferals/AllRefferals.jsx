import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Agentcommissionrequestreport from "./Agentcommissionrequestreport";
import Agentreferralpromotionsreport from "./Agentreferralpromotionsreport";
import Agentrewardcommissionreport from "./Agentrewardcommissionreport";
import RedeemCommissionRequestDataTables from "./refferalsDataTables/RedeemcommissionrequestsDataTables";
import RefferalRewardCommissionDataTables from "./refferalsDataTables/ReferralrewardcommissionsDataTables";
import RefferalsDataTables from "./refferalsDataTables/RefferalsDataTables";


class AllRefferals extends Component {
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
          <div className="header-reports-holder">Refferals</div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <div class="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </div>
              <div class="breadcrumb-item">
                <Link >Referrals</Link>
              </div>

              <li class="breadcrumb-item " aria-current="page">
              {this.props.location.pathname === "/refferals" ? (
                <span>Refferals</span>
              ) : null}
              {this.props.location.pathname ===
              "/refferals/referralrewardcommissions" ? (
                <span>Refferal Reward Commissions</span>
              ) : null}
              {this.props.location.pathname ===
              "/refferals/redeemcommissionrequests" ? (
                <span>Redeem Commission Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/refferals/agentreferralpromotionsreport" ? (
                <span>Agent Referral Promotions Report</span>
              ) : null}
              {this.props.location.pathname ===
              "/refferals/agentrewardcommissionreport" ? (
                <span>Agent Reward Commission Report</span>
              ) : null}
              {this.props.location.pathname ===
              "/refferals/agentcommissionrequestreport" ? (
                <span>Agent Commission Request Report</span>
              ) : null}
              </li>
            </ol>
          </nav>
        </div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">
              {this.props.location.pathname === "/refferals" ? (
                <span>Refferals</span>
              ) : null}
              {this.props.location.pathname ===
              "/refferals/referralrewardcommissions" ? (
                <span>Refferal Reward Commissions</span>
              ) : null}
              {this.props.location.pathname ===
              "/refferals/redeemcommissionrequests" ? (
                <span>Redeem Commission Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/refferals/agentreferralpromotionsreport" ? (
                <span>Agent Referral Promotions Report</span>
              ) : null}
              {this.props.location.pathname ===
              "/refferals/agentrewardcommissionreport" ? (
                <span>Agent Reward Commission Report</span>
              ) : null}
              {this.props.location.pathname ===
              "/refferals/agentcommissionrequestreport" ? (
                <span>Agent Commission Request Report</span>
              ) : null}
            </div>
            {/* <Link type="button" class="btn action-button" to={"/refunds"}>
              <ArrowBack />
              Back
            </Link> */}
          </div>
        </div>
        <div className="all-advance-requests-holder">
          <div>
            {this.props.location.pathname === "/refferals" ? (
              <RefferalsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/refferals/referralrewardcommissions" ? (
              <RefferalRewardCommissionDataTables/>
            ) : null}
            {this.props.location.pathname ===
            "/refferals/redeemcommissionrequests" ? (
              <RedeemCommissionRequestDataTables/>
            ) : null}
            {this.props.location.pathname ===
            "/refferals/agentreferralpromotionsreport" ? (
              <Agentreferralpromotionsreport/>
            ) : null}
            {this.props.location.pathname ===
            "/refferals/agentrewardcommissionreport" ? (
              <Agentrewardcommissionreport/>
            ) : null}
            {this.props.location.pathname ===
            "/refferals/agentcommissionrequestreport" ? (
              <Agentcommissionrequestreport/>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AllRefferals);
