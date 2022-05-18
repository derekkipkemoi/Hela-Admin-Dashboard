import React, { Component } from "react";
import Select from "react-select";

import {
    ArrowBack,
  Star,
} from "@mui/icons-material";
import appData from "../appCommonData.json";
import { Link } from "react-router-dom";
const companiesOption = appData.companies;

class NewMessage extends Component {
  state = {
    selectedOption: "single",
    selectedOptionValue: null,
    expand: false,
  };

  onChangeRadioValue = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  handleChange = (selectedOptionValue) => {
    this.setState({ selectedOptionValue }, () =>
      console.log(`Option selected:`, this.state.selectedOptionValue)
    );
  };
  render() {
    const styles = {
      container: (css) => ({ ...css, width: "400px" }),
    };
    return (
      <div>
        
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">
              <span>New Message</span>
            </div>
            <Link
              type="button"
              class="btn action-button"
              to={"/messages"}
            >
              <ArrowBack />
              Messages
            </Link>
          </div>
        </div>
        <div>
          <div className="new-message-card">
            <div className="d-flex justify-content-start">
              <div className="single-radio-checkbox">
                <input
                  class="form-check-input"
                  type="radio"
                  value="single"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={this.state.selectedOption === "single"}
                  onChange={this.onChangeRadioValue}
                />
                <label class="form-check-label fw-bold ms-2">
                  Single/Multiple
                </label>
              </div>
              <div class="company-radio-checkbox">
                <input
                  class="form-check-input"
                  type="radio"
                  value="company"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked={this.state.selectedOption === "company"}
                  onChange={this.onChangeRadioValue}
                />
                <label class="form-check-label fw-bold ms-2">Company</label>
              </div>
              <hr />
            </div>
            <p className="mt-2">
              {this.state.selectedOption === "company" ? (
                <Select
                 
                  placeholder="Select Company to Message"
                  onChange={this.handleChange}
                  options={companiesOption}
                />
              ) : null}
            </p>
            <form>
              {this.state.selectedOption === "single" ? (
                <div>
                  <div class="modal-info">
                    <p className="m-0 text-danger fw-bold">Important! </p>
                    <p className="m-0">
                      <Star className="fs-6" /> Enter phone numbers separated by
                      commas
                    </p>
                    <p className="m-0">
                      <Star className="fs-6 " /> Do not put space between phone
                      numbers
                    </p>
                  </div>
                  <label for="recipient-name" class="col-form-label fw-bold">
                    Recipients:
                  </label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
              ) : null}

              <div class="mb-3">
                <label class="col-form-label fw-bold">Message:</label>
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewMessage;
