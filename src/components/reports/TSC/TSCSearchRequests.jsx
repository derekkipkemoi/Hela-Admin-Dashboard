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
        <div className="d-flex justify-content-between">
          <div className="header-reports-holder">Advance Requests</div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <div class="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </div>
              <div class="breadcrumb-item">
                <Link to={"/tscrequests"}>TSC Requests</Link>
              </div>

              <li class="breadcrumb-item " aria-current="page">
              Advance Request Report
              </li>
            </ol>
          </nav>
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
