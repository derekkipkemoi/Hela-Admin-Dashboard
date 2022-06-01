import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import DisbursedRewardsDataTables from "./shareAndRewardDataTables/DisburseRewardsDataTables";
import ProcessedRewardsDataTables from "./shareAndRewardDataTables/ProcessedRewardsDataTables";
import PromotionsUserReferalsDataTables from "./shareAndRewardDataTables/PromotionUserReferralsDataTables";
import RedeemRequestsDataTables from "./shareAndRewardDataTables/RedeemRequestsDataTables";

class AllShareAndReward extends Component {
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
          <div className="header-reports-holder">Reports</div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <div class="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </div>
              <div class="breadcrumb-item">
                <Link to={"/m_pesa"}>Share And Rewards</Link>
              </div>

              <li class="breadcrumb-item " aria-current="page">
                {this.props.location.pathname ===
                "/share&reward/userrefferals" ? (
                  <span>Promotion User Referrals</span>
                ) : null}
                {this.props.location.pathname ===
                "/share&reward/redeemrequests" ? (
                  <span>Redeem Requests</span>
                ) : null}
                {this.props.location.pathname ===
                "/share&reward/pendingdisbursement" ? (
                  <span>Pending Disbursement</span>
                ) : null}
                {this.props.location.pathname ===
                "/share&reward/processedrewards" ? (
                  <span>Processed Rewards</span>
                ) : null}
              </li>
            </ol>
          </nav>
        </div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">
              {this.props.location.pathname ===
              "/share&reward/userrefferals" ? (
                <span>Promotion User Referrals</span>
              ) : null}
              {this.props.location.pathname ===
              "/share&reward/redeemrequests" ? (
                <span>Redeem Requests</span>
              ) : null}
              {this.props.location.pathname ===
              "/share&reward/pendingdisbursement" ? (
                <span>Pending Disbursement</span>
              ) : null}
              {this.props.location.pathname ===
              "/share&reward/processedrewards" ? (
                <span>Processed Rewards</span>
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
            {this.props.location.pathname === "/share&reward/userrefferals" ? (
              <PromotionsUserReferalsDataTables />
            ) : null}
            {this.props.location.pathname === "/share&reward/redeemrequests" ? (
              <RedeemRequestsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/share&reward/pendingdisbursement" ? (
              <DisbursedRewardsDataTables />
            ) : null}
            {this.props.location.pathname ===
            "/share&reward/processedrewards" ? (
              <ProcessedRewardsDataTables />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AllShareAndReward);
