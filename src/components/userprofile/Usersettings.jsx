import React, { Component } from "react";
import { connect } from "react-redux";

import { Edit } from "@mui/icons-material";
import * as actions from "../../actions";

import "./userprofile.css";

class Usersettings extends Component {
  state = {};
  render() {
    const cardBackgroundColor = {
      backgroundColor: "#ffff",
    };

    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div class="col-sm-12 col-md-6 col-log-3 mb-3">
                <label class="form-label">
                  Interest Rate
                </label>
                <input
                  type="text"
                  defaultValue="20"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  {/* We'll never share your email with anyone else. */}
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-log-3 mb-3">
                <label  class="form-label">
                  Commission Rate
                </label>
                <input
                  type="text"
                  defaultValue="7"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  {/* We'll never share your email with anyone else. */}
                </div>
              </div>
            </div>

            <div className="row">
              <div class="col-sm-12 col-md-6 col-log-3 mb-3">
                <label class="form-label">
                  Rollover Rate
                </label>
                <input
                  type="text"
                  defaultValue="30"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  {/* We'll never share your email with anyone else. */}
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-log-3 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Available Funds
                </label>
                <input
                  type="text"
                  defaultValue="23,764"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  {/* We'll never share your email with anyone else. */}
                </div>
              </div>
            </div>

            <hr />

            <div className="row">
              <div class="col-sm-12 col-md-6 col-log-3 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  defaultValue={this.props.email}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  {/* We'll never share your email with anyone else. */}
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-log-3 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="email"
                  defaultValue={this.props.phone}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  {/* We'll never share your email with anyone else. */}
                </div>
              </div>
            </div>

            <div className="row">
              <div class="col-sm-12 col-md-6 col-log-3 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  User Type
                </label>
                <input
                  type="email"
                  defaultValue={this.props.user_type}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  {/* We'll never share your email with anyone else. */}
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-log-3 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Refund Status
                </label>
                <input
                  type="email"
                  defaultValue={this.props.refund_status}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  {/* We'll never share your email with anyone else. */}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="d-grid gap-2 col-12 mt-1">
                <button className="btn" type="button">
                  <Edit /> Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    first_name: state.auth.first_name,
    refund_status: state.auth.refund_status,
    middle_name: state.auth.middle_name,
    surname: state.auth.surname,
    email: state.auth.email,
    phone: state.auth.phone,
    user_type: state.auth.user_type,
  };
};

export default connect(mapStateToProps)(Usersettings);
