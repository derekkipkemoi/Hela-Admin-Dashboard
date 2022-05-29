import React from "react";

import { People, ArrowUpward } from "@mui/icons-material";

export default function TotalReceivedCard() {
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
      <div className="card border text-dark p-3" style={cardBackgroundColor}>
        <div className="card-content">
          <div className="text-muted card-title float-start">Users</div>
          <div className="float-end card-icon">
            <People />
          </div>
        </div>
        <div className="fw-bold fs-4">24,850</div>

        <div className="pt-3 text-muted">
          <span className="pe-2 fw-bold" style={upwardarrowstyle}>
            <ArrowUpward />
          </span>
          <span style={upwardarrowstyle}>5.27%</span>
          <div className="pt-3" style={footerText}>
            Compare to last year (2020)
          </div>
        </div>
      </div>
    </div>
  );
}
