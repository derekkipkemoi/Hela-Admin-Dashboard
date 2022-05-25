import React from "react";

import { AccountBalanceWallet, ArrowUpward } from "@mui/icons-material";


export default function OverdueLoans() {
  const cardBackgroundColor = {
    backgroundColor: "#fff",
  };

  const upwardarrowstyle = {
    color: "#0acf97"
}

  return (
    <div className="col-md-3 mb-3">
      <div className="card border text-dark p-3" style={ cardBackgroundColor }>
        
          <div className="card-content">
            <div className="text-muted card-title float-start">Overdue Loans</div>
            <div className="float-end card-icon"><AccountBalanceWallet/></div>
          </div>
          <div className="fw-bold fs-4">12,850</div>

          <div className="pt-3 text-muted"><span className="pe-2 fw-bold" style={upwardarrowstyle}><ArrowUpward/></span><span style={upwardarrowstyle}>5.27%</span><span className="ms-3">Since last month</span></div>
        
      </div>
    </div>
  );
}
