import { ArrowBack} from "@mui/icons-material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import appData from "../../../../appCommonData.json";
import StaffDetails from "./StaffDetails";
import StaffFiles from "./StaffFiles";

const rolesOptions = appData.roles;
const companyOptions = appData.companies;
const genderOptions = appData.gender;
const employmentOptions = appData.employment;

class ViewStaff extends Component {
  state = {
    selectedOptionValue: null,
    currentTab: 0,
  };
  handleChange = (selectedOptionValue) => {
    this.setState({ selectedOptionValue }, () =>
      console.log(`Option selected:`, this.state.selectedOptionValue)
    );
  };

  changeTab = (currentTab) => {
    this.setState({
      currentTab: currentTab,
    });
  };
  render() {
    return (
      <div className="row add-section">
        <div className="fw-bold">Management</div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">Staff Details</div>
            <Link type="button" class="btn action-button" to={"/staff"}>
              <ArrowBack />
              Back
            </Link>
          </div>
        </div>

        <div className="card">
          <div class="card-body">
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-start col-md-6">
                <button
                  className="btn-user-details"
                  onClick={(e) => this.changeTab(0)}
                >
                  Staff Details
                </button>
                <button
                  className="btn-user-details"
                  onClick={(e) => this.changeTab(1)}
                >
                  Staff Files
                </button>
              </div>
              <div className="d-flex justify-content-end col-md-6">
                <Link className="button-approved" to={"/staff/updatestaff"}>
                  Update
                </Link>
              </div>
            </div>

            {this.state.currentTab === 0 ? <StaffDetails /> : null}
            {this.state.currentTab === 1 ? <StaffFiles /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewStaff;
