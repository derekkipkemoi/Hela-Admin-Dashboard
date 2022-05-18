import React from "react";

import { AccountBalance, ArrowUpward, ArrowDownward } from "@mui/icons-material";

export default function AdvanceInterestCard() {
  const cardBackgroundColor = {
    backgroundColor: "#fff",
  };

  const upwardarrowstyle = {
    color: "#fa5c7c"
}

  return (
    <div className="col-md-3 mb-3">
      <div className="card text-dark p-3" style={ cardBackgroundColor }>
        
          <div className="card-content">
            <div className="text-muted card-title float-start">Advance Interest</div>
            <div className="float-end card-icon"><AccountBalance/></div>
          </div>
          <div className="fw-bold fs-4">34,050</div>

          <div className="pt-3 text-muted"><span className="pe-2 fw-bold" style={upwardarrowstyle}><ArrowDownward/></span><span style={upwardarrowstyle}>5.27%</span><span className="ms-3">Since last month</span></div>
        
      </div>
    </div>
  );
}