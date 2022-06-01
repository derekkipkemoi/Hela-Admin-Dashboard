import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Refresh, Search } from "@mui/icons-material";

class SearchAdvanceRequests extends Component {
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
      <div className="all-advance-requests-holder">
        <div className="row">
          <div className="col col-sm-12 col-md-6 col-xl-4 col-xxl-4 d-flex mt-2">
            <input
              className="input-requests-search"
              placeholder="Enter phone number"
            ></input>
            <div className="search-reports-query-button">
              <Search />
            </div>
          </div>
          <div className="col col-sm-12 col-md-6 col-xl-4 col-xxl-4 d-flex mt-2">
            <div className="refresh-reports-query-button">
              Refresh <Refresh />
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default SearchAdvanceRequests;
