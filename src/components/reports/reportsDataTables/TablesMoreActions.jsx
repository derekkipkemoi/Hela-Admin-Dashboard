import React, { Component } from "react";
import {
  Book,
  Comment,
  DoneOutline,
  Edit,
  FilePresent,
  Share,
  Stop,
  ThumbDownAlt,
  ThumbUpAlt,
  List,
  MoreHoriz,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

class TablesMoreActions extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          class=""
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <MoreHoriz />
        </div>
        <div
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton2"
        >
            
          <div className="row">
            <div className="col-auto">
              <span
                data-tip
                data-for="bookRequest"
                className="approveicon"
                to={"staff/viewstaff"}
              >
                <Book />
                <ReactTooltip id="bookRequest" type="success" effect="solid">
                  <span>Book Request</span>
                </ReactTooltip>
              </span>

              <span
                data-tip
                data-for="comment"
                className="visibilityicon"
                to={"staff/viewstaff"}
              >
                <Comment />
                <ReactTooltip id="comment" type="dark" effect="solid">
                  <span>1 Comment</span>
                </ReactTooltip>
              </span>

              <span
                data-tip
                data-for="hasFile"
                className="visibilityicon"
                to={"staff/viewstaff"}
              >
                <FilePresent />
                <ReactTooltip id="hasFile" type="dark" effect="solid">
                  <span>Request has file</span>
                </ReactTooltip>
              </span>
              <span
                data-tip
                data-for="disbursemoney"
                className="approveicon"
                data-bs-toggle="modal"
                data-bs-target="#approveUserModal"
              >
                <DoneOutline />
              </span>
              <ReactTooltip id="disbursemoney" type="success" effect="solid">
                <span>Disburse Money</span>
              </ReactTooltip>
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <span
                data-tip
                data-for="updatestatustopayroll"
                className="deleteicon"
                to={"staff/viewstaff"}
              >
                <Stop />
                <ReactTooltip
                  id="updatestatustopayroll"
                  type="error"
                  effect="solid"
                >
                  <span>Update Status to Not Payroll</span>
                </ReactTooltip>
              </span>

              <span
                data-tip
                data-for="confirmdecline"
                className="deleteicon"
                to={"staff/viewstaff"}
              >
                <ThumbUpAlt />
                <ReactTooltip id="confirmdecline" type="error" effect="solid">
                  <span>Confirm Decline</span>
                </ReactTooltip>
              </span>

              <span
                data-tip
                data-for="payslipshared"
                className="approveicon"
                to={"staff/viewstaff"}
              >
                <Share />
                <ReactTooltip id="payslipshared" type="success" effect="solid">
                  <span>Update Status to Payslip Shared</span>
                </ReactTooltip>
              </span>
              <span
                data-tip
                data-for="editPermission"
                className="editicon"
                to={"staff/viewstaff"}
              >
                <Edit />
              </span>
              <ReactTooltip id="editPermission" type="info" effect="solid">
                <span>Edit Staff</span>
              </ReactTooltip>
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <span
                data-tip
                data-for="pendingpayslipshare"
                className="pendingicon"
                to={"staff/viewstaff"}
              >
                <Share />
                <ReactTooltip
                  id="pendingpayslipshare"
                  type="warning"
                  effect="solid"
                >
                  <span>Update Status to Pending Payslip Share</span>
                </ReactTooltip>
              </span>

              <span
                data-tip
                data-for="payroll"
                className="pendingicon"
                to={"staff/viewstaff"}
              >
                <List />
                <ReactTooltip id="payroll" type="warning" effect="solid">
                  <span>Update Status to Pending @ Payroll</span>
                </ReactTooltip>
              </span>

              <span
                data-tip
                data-for="viewUser"
                className="visibilityicon"
                to={"staff/viewstaff"}
              >
                <List />
                <ReactTooltip id="viewUser" type="info" effect="solid">
                  <span>Update Status to @ Payroll - DD Pending</span>
                </ReactTooltip>
              </span>

              <span
                data-tip
                data-for="deletePermission"
                data-bs-toggle="modal"
                data-bs-target="#declineUserModal"
                className="deleteicon"
              >
                <ThumbDownAlt />
              </span>
              <ReactTooltip id="deletePermission" type="error" effect="solid">
                <span>Decline Staff</span>
              </ReactTooltip>
            </div>
          </div>
        </div>
        </div>
     
    );
  }
}

export default TablesMoreActions;
