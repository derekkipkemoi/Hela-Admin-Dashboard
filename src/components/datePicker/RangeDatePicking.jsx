import React, { Component } from "react";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

import "./datepicker.css"
class RangeDatePicking extends Component {
  state = {};

  onDateChange = (startDate, endDate) => {
    this.props.onDateChange(startDate, endDate)
  };
  render() {
    return (
      <div className="custom-date-selector">
        <span className="custom-date-selector-header">Custom</span>
        <RangeDatePicker
          startDate={new Date()}
          endDate={new Date()}
          onChange={this.onDateChange}
          minDate={new Date(1900, 0, 1)}
          maxDate={new Date(2100, 0, 1)}
          dateFormat="D"
          monthFormat="DDD MMM YYYY"
          startDatePlaceholder="Start Date"
          endDatePlaceholder="End Date"
          disabled={false}
          className="range-date-picker"
          startWeekDay="monday"
        />
      </div>
    );
  }
}

export default RangeDatePicking;
