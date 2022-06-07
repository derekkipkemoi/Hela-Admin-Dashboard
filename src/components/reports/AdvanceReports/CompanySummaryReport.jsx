import React, { Component } from "react";

class CompanySummaryReport extends Component {
  state = {};
  render() {
    return (
      <div>
        <p className="fw-bold">ALL COMPANIES</p>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
            <p className="fw-bold"><u>For All Borrowers (Ksh)</u></p>
            <p>Total Principle Disbursed: 3,491,555</p>
            <p>Total Interest Payable: 4,786,214</p>
            <p>Total Amount Payable: 8,277,769</p>
            <p>Total Count: 378</p>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
            <p className="fw-bold"><u>For First Time Borrowers (Ksh)</u></p>
            <p>Total Principle Disbursed: 3,491,555</p>
            <p>Total Interest Payable: 4,786,214</p>
            <p>Total Amount Payable: 8,277,769</p>
            <p>Total Count: 378</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanySummaryReport;
