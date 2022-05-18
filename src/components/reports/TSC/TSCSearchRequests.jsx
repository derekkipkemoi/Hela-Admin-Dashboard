import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ArrowBack, Refresh, Search } from "@mui/icons-material";
import appData from "../../appCommonData.json";
import RequestSummaryDataTables from "../reportsDataTables/RequestSummaryDataTables";

class TSCSearchRequests extends Component {
  state = {
    selectedCompanyOptionValue: "",
    selectedStatusOptionValue: "",
    endDate: new Date().toDateString(),
    startDate: new Date(
      new Date().setDate(new Date().getDate() - 30)
    ).toDateString(),
  };

  render() {
    return (
      <div>
        <div className="fw-bold">Reports</div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">Search Requests</div>
            <Link
              type="button"
              class="btn action-button"
              to={"/advancerequests"}
            >
              <ArrowBack />
              Back
            </Link>
          </div>
        </div>
        <div className="all-advance-requests-holder">
          <div className="row">
            <div className="col col-sm-12 col-md-6 col-xl-4 col-xxl-4 d-flex mt-2">
              <input className="input-requests-search" placeholder="Enter phone number"></input>
              <div className="search-reports-query-button"><Search/></div>
            </div>
            <div className="col col-sm-12 col-md-6 col-xl-4 col-xxl-4 d-flex mt-2">
              <input className="input-requests-search" placeholder="Enter reference number"></input>
              <div className="search-reports-query-button">
              <Search/>
              </div>
            </div>
            <div className="col col-sm-12 col-md-6 col-xl-4 col-xxl-4 d-flex mt-2">
              <div className="refresh-reports-query-button">
                Refresh <Refresh/>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default TSCSearchRequests;
