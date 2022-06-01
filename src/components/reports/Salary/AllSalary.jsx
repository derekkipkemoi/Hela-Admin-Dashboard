import { UploadFile } from "@mui/icons-material";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import SalaryAdvancesDataTable from "./SalaryDataTables/SalaryAdvancesDataTables";
import SalaryUpdateDataTable from "./SalaryDataTables/SalaryUpdateDataTables";
import SearchAdvanceRequests from "./SearchAdvanceRequests";

class AllSalary extends Component {
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
                <Link to={"/salary"}>Salary</Link>
              </div>

              <li class="breadcrumb-item " aria-current="page">
                {this.props.location.pathname === "/salary/salaryupdate" ? (
                  <span>Salary Update</span>
                ) : null}
                {this.props.location.pathname === "/salary/salaryadvances" ? (
                  <span>Salary Advances</span>
                ) : null}
                {this.props.location.pathname ===
                "/salary/salaryadvancesearch" ? (
                  <span>Salary Advances Search</span>
                ) : null}
              </li>
            </ol>
          </nav>
        </div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">
              {this.props.location.pathname === "/salary/salaryupdate" ? (
                <span>Salary Update</span>
              ) : null}
              {this.props.location.pathname === "/salary/salaryadvances" ? (
                <div>
                  <span>Salary Advances</span>
                  <span type="button" class="action-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <UploadFile />
                    Upload Reconciliation File
                  </span>
                </div>
              ) : null}
              {this.props.location.pathname ===
              "/salary/salaryadvancesearch" ? (
                <span>Salary Advances Search</span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="all-advance-requests-holder">
          <div>
            {this.props.location.pathname === "/salary/salaryupdate" ? (
              <SalaryUpdateDataTable />
            ) : null}
            {this.props.location.pathname === "/salary/salaryadvances" ? (
              <SalaryAdvancesDataTable />
            ) : null}
            {this.props.location.pathname === "/salary/salaryadvancesearch" ? (
              <SearchAdvanceRequests />
            ) : null}
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
              <input class="form-control" type="file" id="formFile"/>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Upload File
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AllSalary);
