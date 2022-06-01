import { Add, Refresh, Search } from "@mui/icons-material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import RemindersDataTable from "../dataTables/RemindersDataTables";

import "../management/management.css";

class Reminders extends Component {
  state = {};

  render() {
    return (
      <div className="row management-section">
        <div className="d-flex justify-content-between">
          <div className="fw-bold">Reminders</div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <div class="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </div>
              <li class="breadcrumb-item " aria-current="page">
                Reminders
              </li>
            </ol>
          </nav>
        </div>
        <div className="col action-section">
          <div className="actions-name">Reminders</div>

          <Link
            type="button"
            class="btn action-button"
            to={"/reminders/newreminder"}
          >
            <Add />
            Create Reminders
          </Link>
        </div>
        <div className="col tabs-section">
          <div className="refresh-management-button">
            <Refresh />
          </div>
        </div>
        <div className="all-data-tables-holder ">
          <RemindersDataTable />
        </div>
      </div>
    );
  }
}

export default Reminders;
