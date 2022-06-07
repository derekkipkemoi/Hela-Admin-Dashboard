import { ArrowBack, Star } from "@mui/icons-material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class UpdateSettings extends Component {
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
                Update System Settings
              </li>
            </ol>
          </nav>
        </div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">System Settings</div>
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
                <input type="text" className="form-control" placeholder="20" />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">Rollover Rate</label>
                <input type="text" className="form-control" placeholder="30" />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Disbursements Orientation
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input type="text" className="form-control" placeholder="0" />
              </div>

              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Min Amount
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
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
                <input type="text" className="form-control" placeholder="5" />
              </div>
              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Available Funds
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
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
                <input type="text" className="form-control" placeholder="0" />
              </div>
              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Minimum Commission Amount
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
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
                <input type="text" className="form-control" placeholder="10" />
              </div>
              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  WhatsApp
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
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
                <input type="text" className="form-control" placeholder="10" />
              </div>
              <div class="col-sm-12 col-md-3 col-xl-3 mb-3">
                <label class="form-label">
                  Updated At
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="2022-06-07 10:16:45"
                />
              </div>
            </div>
            <div className="row">
              <label class="form-label">
                About Us
                <Star className="text-danger" style={{ fontSize: "12px" }} />
              </label>
              <div className="col">
                <textarea
                  class="form-control"
                  style={{ height: "150px" }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateSettings;
