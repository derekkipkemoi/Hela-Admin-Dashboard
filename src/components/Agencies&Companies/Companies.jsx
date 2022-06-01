import { Add, Refresh, Search } from "@mui/icons-material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import CompaniesDataTable from "../dataTables/CompaniesDataTables";

import "../management/management.css";

class Companies extends Component {
  state = {
  };


  render() {
    return (
      <div className="row management-section">
        <div className="d-flex justify-content-between">
          <div className="fw-bold">Agencies And Companies</div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <div class="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </div>
              <li class="breadcrumb-item " aria-current="page">
                Comapnies
              </li>
            </ol>
          </nav>
        </div>
        <div className="col action-section">
          <div className="actions-name">Users</div>

          <Link type="button" class="btn action-button" to={"/companies/newcompany"}>
            <Add />
            Company
          </Link>
        </div>
        <div className="col tabs-section">
          <div className="refresh-management-button">
            <Refresh />
          </div>
        </div>
        <div className="all-data-tables-holder ">
          <CompaniesDataTable />
        </div>
      </div>
    );
  }
}

export default Companies;
