import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import appData from "../../appCommonData.json";
import UncapturedDisbursmentDataTables from "../reportsDataTables/UnCapturedDisbursmentDataTables";

class UncapturedDisbursment extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <div className="fw-bold">Reports</div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">
                Uncaptured Disbursment
            </div>
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
          <UncapturedDisbursmentDataTables />
        </div>
      </div>
    );
  }
}

export default withRouter(UncapturedDisbursment);
