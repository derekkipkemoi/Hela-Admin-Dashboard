import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import * as actions from "../../actions";
import { Login, Visibility, VisibilityOff } from "@mui/icons-material";
import "./signin.css";
import CustomInput from "../customInput/CustomInput";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";

class Signin extends Component {
  state = {
    loading: false,
    showPassword: false,
  };

  componentDidMount = () => {
    const dashboardcontent = document.getElementById("dashboard-content");

    if (dashboardcontent) {
      dashboardcontent.classList.remove("body-pd");
    }
    if (this.props.isAuthenticated) {
      this.props.history.push("/");
    }
  };
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(formData) {
    this.setState({
      loading: true,
    });
    await this.props.SignIn(formData);
    if (this.props.isAuthenticated) {
      this.props.history.push("/");
    }
    this.setState({
      loading: false,
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container signin-form">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card mb-3">
              <div className="fs-5 text-dark text-center">Log In</div>
              <hr />
              <div className="card-body m-3">
                <form onSubmit={handleSubmit(this.onSubmit)}>
                  <div className="mb-3">
                    <label className="form-label">
                      Phone Number<span className="text-danger"> *</span>
                    </label>

                    <fieldset>
                      <Field
                        name="phone"
                        type="phoneNumber"
                        id="phone"
                        placeholder="Enter Phone Number"
                        errorText="Correct password needed"
                        className="form-control"
                        minLength="10"
                        component={CustomInput}
                      />
                    </fieldset>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Password<span className="text-danger"> *</span>
                    </label>

                    <div className="input-group-assword input-group">
                      <fieldset className="fieldset-password">
                        <Field
                          name="password"
                          type={this.state.showPassword ? "text" : "password"}
                          id="password"
                          placeholder="Enter password"
                          className="form-control"
                          minLength="6"
                          component={CustomInput}
                        />
                      </fieldset>
                      <span
                        className="input-group-addon-password-show-hide input-group-addon text-dark"
                        role="button"
                        onClick={() => {
                          this.setState({
                            showPassword: !this.state.showPassword,
                          });
                        }}
                      >
                        {this.state.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </span>
                    </div>
                  </div>
                  {this.state.loading ? <Spinner /> : null}
                  <div className="d-grid gap-2">
                    <button type="submit" className="input-group-text btn">
                      <span className="icon">
                        <Login />
                      </span>{" "}
                      Log In
                    </button>
                  </div>
                </form>
              </div>

              {this.props.message ? (
                <div className="alert alert-danger text-center m-3 p-1">
                  {this.props.message}
                </div>
              ) : null}
            </div>
          </div>
          <p className="text-center">
            Forgot Password ?{" "}
            <span>
              <Link className="fw-bold text-dark ms-2" to={"/resetpassword"}>
                Reset Password
              </Link>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.phone) {
    errors.phone = "Enter a valid phone number";
  }

  if (!formValues.password) {
    errors.password = "Your password must contain a minimum of 6 characters";
  }

  return errors;
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    message: state.auth.message,
    middle_name: state.auth.middle_name,
  };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signin", validate })
)(Signin);
