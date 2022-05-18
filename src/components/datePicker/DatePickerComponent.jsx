import {DateRange } from "@mui/icons-material";
import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import "./datepicker.css"

class DatePickerComponent extends Component {
  handleChangeOne = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleChangeTwo = (date) => {
    this.setState({
      endDate: date,
    });
  };

  openDatePickerOne = () => {
    this.setState({
      datePickerOneIsOpen: !this.state.datePickerOneIsOpen,
    });
  };

  openDatePickerTwo = () => {
    this.setState({
      datePickerTwoIsOpen: !this.state.datePickerTwoIsOpen,
    });
  };

  state = {
    startDate: new Date(),
    datePickerOneIsOpen: false,

    endDate: new Date(),
    datePickerTwoIsOpen: false,
  };

  render() {
    return (
      <div className="row date-picker me-6">

        <div className="col-auto datepicker-icon-start text-center" onClick={this.openDatePickerOne}>
            <DateRange />
          </div>
        <div className="col-auto p-0">
          <DatePicker
            className="form-control-date-picker"
            selected={this.state.startDate}
            onChange={this.handleChangeOne}
            onClickOutside={this.openDatePickerOne}
            open={this.state.datePickerOneIsOpen}
          />
          
        </div>



        <div className="col-auto p-0">
          <DatePicker
            className="form-control-date-picker"
            selected={this.state.endDate}
            onChange={this.handleChangeTwo}
            onClickOutside={this.openDatePickerTwo}
            open={this.state.datePickerTwoIsOpen}
          />
          
        </div>
        <div className="col-auto datepicker-icon text-center" onClick={this.openDatePickerTwo}>
            <DateRange />
          </div>
      </div>
    );
  }
}

export default DatePickerComponent;
