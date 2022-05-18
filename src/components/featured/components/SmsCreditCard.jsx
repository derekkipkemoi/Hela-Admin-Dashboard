import React from "react";

import { People, ArrowUpward } from "@mui/icons-material";


export default function SmsCreditCard() {
  const cardBackgroundColor = {
    backgroundColor: "#fff",
  };

  const upwardarrowstyle = {
    color: "#0acf97"
}

  return (
    <div className="col-md-3 mb-3">
      <div className="card text-dark p-3" style={ cardBackgroundColor }>
        
          <div className="card-content">
            <div className="text-muted card-title float-start">Users</div>
            <div className="float-end card-icon"><People/></div>
          </div>
          <div className="fw-bold fs-4">24,850</div>

          <div className="pt-3 text-muted"><span className="pe-2 fw-bold" style={upwardarrowstyle}><ArrowUpward/></span><span style={upwardarrowstyle}>5.27%</span><span className="ms-3">Since last month</span></div>
        
      </div>
    </div>
  );
}
