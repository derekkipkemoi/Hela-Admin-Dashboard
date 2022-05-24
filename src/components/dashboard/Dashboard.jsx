import React, { Component } from "react";
import Featured from "../featured/Featured";
import Messages from "../messages/Messages";
import Profile from "../userprofile/Profile";
import RolesAndPermissions from "../management/roles&permissions/RolesAndPermissions";
import AddRole from "../management/roles&permissions/AddRole";
import ViewRole from "../management/roles&permissions/ViewRole";
import Users from "../management/StaffAndUsers/users/Users";
import NewUser from "../management/StaffAndUsers/users/NewUser";
import NewStaff from "../management/StaffAndUsers/staff/NewStaff";
import ViewUser from "../management/StaffAndUsers/users/viewUser/ViewUser";
import ViewStaff from "../management/StaffAndUsers/staff/ViewStaff/ViewStaff";
import Staff from "../management/StaffAndUsers/staff/Staff";
import AdvanceRequestsHolder from "../reports/AdvanceRequests/AdvanceRequestsHolder";
import AllAdvanceRequests from "../reports/AdvanceRequests/AllAdvanceRequests";
import UpdateUser from "../management/StaffAndUsers/users/viewUser/UpdateUser";
import UpdateStaff from "../management/StaffAndUsers/staff/ViewStaff/UpdateStaff";
import UncapturedDisbursment from "../reports/AdvanceRequests/UncapturedDisbursment";
import AllAdvanceRequestsReports from "../reports/AdvanceRequests/AllAdvanceRequestReports";
import ReguestsSummary from "../reports/AdvanceRequests/RequestsSummary";
import SearchRequests from "../reports/AdvanceRequests/SearchRequests";
import TSCRequestsHolder from "../reports/TSC/TSCRequestsHolder";
import AllTSCRequests from "../reports/TSC/AllTSCRequests";
import TSCSearchRequests from "../reports/TSC/TSCSearchRequests";
import RefundsHolder from "../reports/Refunds/RefundsHolder";
import AllRefunds from "../reports/Refunds/AllRefunds";
import MpesaHolder from "../reports/Mpesa/MpesaHolder";
import AllMpesa from "../reports/Mpesa/AllMpesa";
import AllRefferals from "../refferals/AllRefferals";
import AllShareAndReward from "../shareAndReward/AllShareAndReward";
import NewMessage from "../messages/NewMessage";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.location.pathname === "/messages" ? <Messages /> : null}
        {this.props.location.pathname === "/messages/tabledmessages" ? <Messages /> : null}
        {this.props.location.pathname === "/messages/newmessage" ? <NewMessage/> : null}
        {this.props.location.pathname === "/profile" ? <Profile /> : null}
        {this.props.location.pathname === "/settings" ? <Profile /> : null}
        {this.props.location.pathname === "/rolespermissions" ? (
          <RolesAndPermissions />
        ) : null}
        {this.props.location.pathname === "/rolespermissions/addrole" ? (
          <AddRole />
        ) : null}
        {this.props.location.pathname === "/rolespermissions/viewrole" ? <ViewRole/> : null}

        
        {this.props.location.pathname === "/users" ? <Users /> : null}
        {this.props.location.pathname === "/users/adduser" ? <NewUser /> : null}
        {this.props.location.pathname === "/users/viewuser" ? <ViewUser /> : null}
        {this.props.location.pathname === "/users/updateuser" ? <UpdateUser /> : null}

        {this.props.location.pathname === "/staff" ? <Staff /> : null}
        {this.props.location.pathname === "/staff/addstaff" ? <NewStaff /> : null}
        {this.props.location.pathname === "/staff/viewstaff" ? <ViewStaff/> : null}
        {this.props.location.pathname === "/staff/updatestaff" ? <UpdateStaff /> : null}

        {this.props.location.pathname === "/" ? [<Featured />] : null}
        
        {this.props.location.pathname === "/advancerequests" ? <AdvanceRequestsHolder/> : null}
        {this.props.location.pathname === "/advancerequests/alladvancerequests" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/pendingrequests" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/pendingpayslipshared" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/payslipshared" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/payrolldddpending" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/payrolldddone" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/receivedfrompayroll" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/revisedability" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/notonpayroll" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/pendingddbooked" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/declinedbyclients" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/stoporders" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/compliance" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/pendingdisbursment" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/approvedrequests" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/disbursedrequests" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/pendingdeclinerequests" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/declinedrequests" ? <AllAdvanceRequests/> : null}
        {this.props.location.pathname === "/advancerequests/disbursmenterror" ? <AllAdvanceRequests/> : null}

        {this.props.location.pathname === "/advancerequests/uncaptureddisbursment" ? <UncapturedDisbursment/> : null}
        {this.props.location.pathname === "/advancerequests/alladvancerequestsreports" ? <AllAdvanceRequestsReports/> : null}
        {this.props.location.pathname === "/advancerequests/requestsummary" ? <ReguestsSummary/> : null}
        {this.props.location.pathname === "/advancerequests/searchrequests" ? <SearchRequests/> : null}

        {this.props.location.pathname === "/tscrequests" ? <TSCRequestsHolder/> : null}
        {this.props.location.pathname === "/advancerequests/alltscrequests" ? <AllTSCRequests /> : null}
        {this.props.location.pathname === "/advancerequests/pendingtscrequests" ? <AllTSCRequests />  : null}
        {this.props.location.pathname === "/advancerequests/paysliprequiredtsc" ? <AllTSCRequests />  : null}
        {this.props.location.pathname === "/advancerequests/payslipsharedtsc" ? <AllTSCRequests />  : null}
        {this.props.location.pathname === "/advancerequests/topuptsc" ? <AllTSCRequests /> : null}
        {this.props.location.pathname === "/advancerequests/bookedtsc" ? <AllTSCRequests />  : null}
        {this.props.location.pathname === "/advancerequests/duedeligencetsc" ? <AllTSCRequests />  : null}
        {this.props.location.pathname === "/advancerequests/declinedfromrequeststsc" ? <AllTSCRequests />  : null}
        {this.props.location.pathname === "/advancerequests/complianceadvancerequests" ? <AllTSCRequests />  : null}
        {this.props.location.pathname === "/advancerequests/pendingdisbursmenttsc" ? <AllTSCRequests />  : null}
        {this.props.location.pathname === "/advancerequests/approvedtscrequests" ? <AllTSCRequests />  : null}
        {this.props.location.pathname === "/advancerequests/tscpendingdeclinedrequests" ? <AllTSCRequests />  : null}
        {this.props.location.pathname === "/advancerequests/declinedrequeststsc" ? <AllTSCRequests />  : null}
        {this.props.location.pathname === "/advancerequests/tscsearch" ? <TSCSearchRequests />  : null}

        {this.props.location.pathname === "/refunds" ? <RefundsHolder/> : null}
        {this.props.location.pathname === "/refunds/refundsrequests" ? <AllRefunds/> : null}
        {this.props.location.pathname === "/refunds/activerequests" ? <AllRefunds/> : null}

        {this.props.location.pathname === "/m_pesa" ? <MpesaHolder/> : null}
        {this.props.location.pathname === "/m_pesa/disbursement" ? <AllMpesa/> : null}
        {this.props.location.pathname === "/m_pesa/paymentreceived" ? <AllMpesa/> : null}

        {this.props.location.pathname === "/refferals" ? <AllRefferals/> : null}
        {this.props.location.pathname === "/refferals/referralrewardcommissions" ? <AllRefferals/> : null}
        {this.props.location.pathname === "/refferals/redeemcommissionrequests" ? <AllRefferals/> : null}
        {this.props.location.pathname === "/refferals/agentreferralpromotionsreport" ? <AllRefferals/> : null}
        {this.props.location.pathname === "/refferals/agentrewardcommissionreport" ? <AllRefferals/> : null}
        {this.props.location.pathname === "/refferals/agentcommissionrequestreport" ?<AllRefferals/> : null}

        {this.props.location.pathname === "/share&reward/userrefferals" ? <AllShareAndReward/> : null}
        {this.props.location.pathname === "/share&reward/redeemrequests" ? <AllShareAndReward/> : null}
        {this.props.location.pathname === "/share&reward/pendingdisbursement" ? <AllShareAndReward/> : null}
        {this.props.location.pathname === "/share&reward/processedrewards" ? <AllShareAndReward/> : null}
      </div>
    );
  }
}

export default Dashboard;
