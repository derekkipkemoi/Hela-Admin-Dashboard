import { UploadFile } from "@mui/icons-material";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import DataSheetDataTable from "./DataSheetDataTables/DataSheetDataTables";

class AllDataSheets extends Component {
  state = {
    requestStatus: null,
    selectedOptionValue: "",
    endDate: new Date().toDateString(),
    startDate: new Date(
      new Date().setDate(new Date().getDate() - 30)
    ).toDateString(),
  };

  render() {
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
                <Link to={"/datasheets"}>Datasheets</Link>
              </div>

              <li class="breadcrumb-item " aria-current="page">
                {this.props.location.pathname === "/datasheets/datasheetsdata" ? (
                  <span>Datasheets</span>
                ) : null}
              </li>
            </ol>
          </nav>
        </div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">
              {this.props.location.pathname === "/datasheets/datasheetsdata" ? (
                <span>Datasheets</span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="all-advance-requests-holder">
          <div>
            {this.props.location.pathname === "/datasheets/datasheetsdata" ? (
              <DataSheetDataTable />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AllDataSheets);
