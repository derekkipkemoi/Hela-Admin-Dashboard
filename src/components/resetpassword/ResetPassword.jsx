import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import * as actions from "../../actions";
import { LockReset } from "@mui/icons-material";
import "./resetPassword.css";
import CustomInput from "../customInput/CustomInput";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";

class ResetPassword extends Component {
  state = {};

  componentDidMount = () => {
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
            <div className="card text-dark mb-3">
              <div className="text-dark text-center mt-1 mb-1 fw-bold">
                Request Password Reset Link
              </div>
              <hr />
              <div className="card-body">
                <form onSubmit={handleSubmit(this.onSubmit)}>
                  <div className="mb-3">
                  <p className="text-center">Please fill out your email. A link to reset password will be sent there.</p>
                    <label className="form-label">
                      Email Address<span className="text-danger"> *</span>
                    </label>

                    <fieldset>
                      <Field
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Enter Email Address"
                        errorText="Correct email needed"
                        className="form-control"
                        component={CustomInput}
                      />
                    </fieldset>
                  </div>
                  
                  {this.state.loading ? <Spinner /> : null}
                  <div className="d-grid gap-2">
                    <button type="submit" className="input-group-text btn">
                      <span className="icon">
                        <LockReset/>
                      </span>{" "}
                      Request
                    </button>
                  </div>
                </form>
              </div>

              {this.props.message.length > 0 ? (
                <div className="alert alert-danger text-center m-3 p-1">
                  {this.props.message}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.email) {
    errors.email = "Enter a valid email address";
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
  reduxForm({ form: "resetpassword", validate })
)(ResetPassword);
