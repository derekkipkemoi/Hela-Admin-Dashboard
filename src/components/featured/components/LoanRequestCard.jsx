import React from "react";

import { Percent, ArrowUpward } from "@mui/icons-material";

export default function LoanRequestCard() {
  const cardBackgroundColor = {
    backgroundColor: "#fff",
  };

  const statTitle = {
    color: "#1a3353",
    fontSize: "15px",
  };

  const statValue = {
    color: "#1a3353",
  };

  const upwardarrowstyle = {
    color: "#0acf97",
  };

  const footerText = {
    color: "#72849a",
  };

  return (
    <div className="col-sm-12 col-md-4  col-xl-3 col-xxl-3 mb-3">
      <div className="card border text-dark p-4" style={cardBackgroundColor}>
        <div className="card-content">
          <div className="fw-bold card-title float-start" style={statTitle}>
            Loan Request
          </div>
          {/* <div className="float-end card-icon"><People/></div> */}
        </div>
        <div className="d-flex align-items-center">
          <div className="fw-bold fs-3" style={statValue}>
            24,850
          </div>
          <span className="ms-2" style={upwardarrowstyle}>
            <ArrowUpward />
          </span>
          <span className="fw-bold" style={upwardarrowstyle}>
            5.27%
          </span>
        </div>

        <div style={footerText}>Compare to last year (2020)</div>
      </div>
    </div>
  );
}
