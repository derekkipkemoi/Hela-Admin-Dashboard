import { DateRange } from "@mui/icons-material";
import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "./datepicker.css";

class OneDatePicker extends Component {
  handleChangeOne = (date) => {
    this.setState({
      startDate: date,
    });
  };

  openDatePickerOne = () => {
    this.setState({
      datePickerOneIsOpen: !this.state.datePickerOneIsOpen,
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
      <div className="one-date-picker">
        <div className="datepicker-icon-start text-center" onClick={this.openDatePickerOne}>
          <DateRange className="date-picker-one-icon"/>
        </div>

        <DatePicker
          className="col form-control-one-date-picker"
          selected={this.state.startDate}
          onChange={this.handleChangeOne}
          onClickOutside={this.openDatePickerOne}
          open={this.state.datePickerOneIsOpen}
        />
      </div>
    );
  }
}

export default OneDatePicker;
