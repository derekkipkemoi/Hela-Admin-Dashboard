import React, { Component, useState } from "react";
import { formValues } from "redux-form";

class CustomInput extends Component {
  state = {
    passwordError: "",
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <div className="alert alert-danger text-center mt-1 p-2">{error}</div>
        </div>
      );
    }
  }

  render() {
    const {
      input: { value, onChange },
      meta,
    } = this.props;
    return (
      <div>
        <input
          className={this.props.className}
          name={this.props.name}
          id={this.props.id}
          placeholder={this.props.placeholder}
          type={this.props.type}
          minLength={this.props.minLength}
          defaultValue={value}
          onChange={onChange}
        />
        {this.renderError(meta)}
      </div>
    );
  }
}

export default CustomInput;
