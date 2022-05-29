import React, { Component } from "react";
import Select from "react-select";

import { ArrowBack, Close, Star } from "@mui/icons-material";
import appData from "../appCommonData.json";
import { Link } from "react-router-dom";
const companiesOption = appData.companies;

let numbersList = [];

class NewMessage extends Component {
  state = {
    selectedOption: "single",
    selectedOptionValue: null,
    validPhone: true,
    numbersList: [],
  };
  enterNumberToList = (event) => {
    let phoneNumber = event.target.value.split(" ").join("");
    if (event.code === "Space") {
      var found = phoneNumber.search(
        /^[\+]?\d{2,}?[(]?\d{2,}[)]?[-\s\.]?\d{2,}?[-\s\.]?\d{2,}[-\s\.]?\d{0,9}$/im
      );
      if (found > -1) {
        numbersList.push(phoneNumber);
        document.getElementById("phoneInput").value = "";
        this.setState({
          numbersList: numbersList,
          validPhone: true,
        });
      } else {
        this.setState({
          validPhone: false,
        });
      }
    }
  };

  clearPhoneList=()=>{
    numbersList = []
    this.setState({
      numbersList: numbersList
    })
  }

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
      <div className="new-message-card">
        <span className="new-message">New Message</span>
        <div>
          <div className="d-flex">
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
              <label className="ps-2">Single / Multiple</label>
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
              <label className="ps-2">Company</label>
            </div>
            <hr />
          </div>
          {this.state.selectedOption === "company" ? (
            <div>
              <label class="fw-bold">Recipients:</label>
              <Select
                placeholder="Select Company to Message"
                onChange={this.handleChange}
                options={companiesOption}
              />
            </div>
          ) : null}

          <form>
            {this.state.selectedOption === "single" ? (
              <div>
                <label class="fw-bold">Recipients:</label>{" "}
                <span className="alert-warning-message-section">
                  Enter phone number followed by space
                </span>
                <input
                  type="text"
                  id="phoneInput"
                  class="form-control"
                  onKeyPress={(e) => {
                    this.enterNumberToList(e);
                  }}
                />
                {!this.state.validPhone ? (
                  <div class="alert alert-danger mt-1" role="alert">
                    Enter a valid phone number
                  </div>
                ) : null}
              </div>
            ) : null}

            {this.state.numbersList.length >= 1 ? (
              <div className="m-2">
                <div className="row">
                  <span className="clear-numbers" onClick={(e)=>{this.clearPhoneList()}}><Close style={{fontSize:"22px"}}/></span>
                  {this.state.numbersList.map((value) => {
                    return (
                      <span className="col recepients-number-list">{value}</span>
                    );
                  })}
                </div>
              </div>
            ) : null}

            <div class="mb-3">
              <label class="col-form-label fw-bold">Message:</label>
              <textarea
                class="form-control"
                id="message-text"
                style={{ height: "150px" }}
              ></textarea>
            </div>
          </form>
          <div className="d-flex justify-content-end">
          <div className="save-draft">Save Draft</div>
            <div className="discard-message">Discard</div>
            <div className="send-message">Send</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewMessage;
