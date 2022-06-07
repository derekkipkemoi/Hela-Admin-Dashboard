import { ArrowBack, Star, Update } from "@mui/icons-material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

class SystemSettings extends Component {
  state = {
    selectedOptionValue: null,
  };
  handleChange = (selectedOptionValue) => {
    this.setState({ selectedOptionValue }, () =>
      console.log(`Option selected:`, this.state.selectedOptionValue)
    );
  };
  render() {
    return (
      <div className="row add-section">
        <div className="d-flex justify-content-between">
          <div className="fw-bold">System Settings</div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <div class="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </div>
              <li class="breadcrumb-item " aria-current="page">
                System Settings
              </li>
            </ol>
          </nav>
        </div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">System Settings</div>
            <Link
              type="button"
              class="btn action-button"
              to={"/systemsettings/update"}
            >
              Update
            </Link>
          </div>
        </div>

        <div className="card">
          <div class="card-body">
            <div className="row">
              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Interest Rate
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="20"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">Rollover Rate</label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="30"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Disbursements Orientation
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="0"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Min Amount
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="Ksh 100.00"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Amount Per Point
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="KES 10.00"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Cell Phone
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="+254207766666"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Email
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="info@helacapitals.com"
                />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Created At
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="info@helacapitals.com"
                />
              </div>
              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Commission Rate
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="5"
                />
              </div>
              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Available Funds
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="KES 364,601.14"
                />
              </div>
              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Flag
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="0"
                />
              </div>
              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Minimum Commission Amount
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="KES 1,000.00"
                />
              </div>
              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Minimum Redeem Points
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="10"
                />
              </div>
              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  WhatsApp
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="+254742866677"
                />
              </div>
              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Points Rate
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="10"
                />
              </div>
              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Updated At
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  placeholder="2022-06-07 10:16:45"
                />
              </div>
            </div>
            <div className="row">
              <p className="fw-bold">About Us</p>
              <div className="col">
                About Us Hela is a Financial Technology (Fintech) Company
                incorporated in Kenya under the Companies Act (CAP 486) of the
                Laws of Kenya. Purpose We are licensed as a lending company to
                provide exclusive credit services to our clients. We deliver
                this using innovative products served to clients via HELA PESA
                APP. Our Vision To be a significant player in the Kenya's
                financial sector that provides clients with innovative and
                technology driven financial solutions. Our Mission To alleviate
                immediate financial challenges of our clients by providing them
                with innovative and convenient financial solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SystemSettings;
