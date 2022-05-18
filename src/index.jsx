import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import axios from "axios";
import { createLogger } from "redux-logger";

import App from "./components/App";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/signin/SignIn";
import reducers from "./reducers";
import AuthGuard from "./components/HigherOrderComponent/AuthGuard";
import ResetPassword from "./components/resetpassword/ResetPassword";
import Profile from "./components/userprofile/Profile";

const loggerMiddleware = createLogger();

ReactDOM.render(
  <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <Route exact path="/messages" component={Dashboard} />
        <Route exact path="/messages/newmessage" component={Dashboard}/>
        <Route exact path="/settings" component={Dashboard} />
        <Route exact path="/profile" component={Dashboard} />

        <Route exact path="/rolespermissions" component={Dashboard}/>
        <Route exact path="/rolespermissions/addrole" component={Dashboard} />
        <Route exact path="/rolespermissions/viewrole" component={Dashboard} />

        <Route exact path="/users" component={Dashboard}/>
        <Route exact path="/users/adduser" component={Dashboard}/>
        <Route exact path="/users/viewuser" component={Dashboard}/>
        <Route exact path="/users/updateuser" component={Dashboard}/>

        <Route exact path="/staff" component={Dashboard}/>
        <Route exact path="/staff/addstaff" component={Dashboard}/>
        <Route exact path="/staff/viewstaff" component={Dashboard}/>
        <Route exact path="/staff/updatestaff" component={Dashboard}/>

        <Route exact path="/advancerequests" component={Dashboard}/>
        <Route exact path="/advancerequests/alladvancerequests" component={Dashboard}/>
        <Route exact path="/advancerequests/pendingrequests" component={Dashboard}/>
        <Route exact path="/advancerequests/pendingpayslipshared" component={Dashboard}/>
        <Route exact path="/advancerequests/payslipshared" component={Dashboard}/>
        <Route exact path="/advancerequests/payrolldddpending" component={Dashboard}/>
        <Route exact path="/advancerequests/payrolldddone" component={Dashboard}/>
        <Route exact path="/advancerequests/receivedfrompayroll" component={Dashboard}/>
        <Route exact path="/advancerequests/revisedability" component={Dashboard}/>
        <Route exact path="/advancerequests/notonpayroll" component={Dashboard}/>
        <Route exact path="/advancerequests/pendingddbooked" component={Dashboard}/>
        <Route exact path="/advancerequests/declinedbyclients" component={Dashboard}/>
        <Route exact path="/advancerequests/stoporders" component={Dashboard}/>
        <Route exact path="/advancerequests/compliance" component={Dashboard}/>
        <Route exact path="/advancerequests/pendingdisbursment" component={Dashboard}/>
        <Route exact path="/advancerequests/approvedrequests" component={Dashboard}/>
        <Route exact path="/advancerequests/disbursedrequests" component={Dashboard}/>
        <Route exact path="/advancerequests/pendingdeclinerequests" component={Dashboard}/>
        <Route exact path="/advancerequests/declinedrequests" component={Dashboard}/>
        <Route exact path="/advancerequests/disbursmenterror" component={Dashboard}/>

        <Route exact path="/advancerequests/uncaptureddisbursment" component={Dashboard}/>
        <Route exact path="/advancerequests/alladvancerequestsreports" component={Dashboard}/>
        <Route exact path="/advancerequests/requestsummary" component={Dashboard}/>
        <Route exact path="/advancerequests/searchrequests" component={Dashboard}/>

        <Route exact path="/tscrequests" component={Dashboard}/>
        <Route exact path="/advancerequests/alltscrequests" component={Dashboard}/>
        <Route exact path="/advancerequests/pendingtscrequests" component={Dashboard}/>
        <Route exact path="/advancerequests/paysliprequiredtsc" component={Dashboard}/>
        <Route exact path="/advancerequests/payslipsharedtsc" component={Dashboard}/>
        <Route exact path="/advancerequests/topuptsc" component={Dashboard}/>
        <Route exact path="/advancerequests/bookedtsc" component={Dashboard}/>
        <Route exact path="/advancerequests/duedeligencetsc" component={Dashboard}/>
        <Route exact path="/advancerequests/declinedfromrequeststsc" component={Dashboard}/>
        <Route exact path="/advancerequests/complianceadvancerequests" component={Dashboard}/>
        <Route exact path="/advancerequests/pendingdisbursmenttsc" component={Dashboard}/>
        <Route exact path="/advancerequests/approvedtscrequests" component={Dashboard}/>
        <Route exact path="/advancerequests/tscpendingdeclinedrequests" component={Dashboard}/>
        <Route exact path="/advancerequests/declinedrequeststsc" component={Dashboard}/>
        <Route exact path="/advancerequests/tscsearch" component={Dashboard}/>

        <Route exact path="/refunds" component={Dashboard}/>
        <Route exact path="/refunds/refundsrequests" component={Dashboard}/>
        <Route exact path="/refunds/activerequests" component={Dashboard}/>

        <Route exact path="/m_pesa" component={Dashboard}/>
        <Route exact path="/m_pesa/disbursement" component={Dashboard}/>
        <Route exact path="/m_pesa/paymentreceived" component={Dashboard}/>


        <Route exact path="/refferals" component={Dashboard}/>
        <Route exact path="/refferals/referralrewardcommissions" component={Dashboard}/>
        <Route exact path="/refferals/redeemcommissionrequests" component={Dashboard}/>
        <Route exact path="/refferals/agentreferralpromotionsreport" component={Dashboard}/>
        <Route exact path="/refferals/agentrewardcommissionreport" component={Dashboard}/>
        <Route exact path="/refferals/agentcommissionrequestreport" component={Dashboard}/>

        <Route exact path="/share&reward/userrefferals" component={Dashboard}/>
        <Route exact path="/share&reward/redeemrequests" component={Dashboard}/>
        <Route exact path="/share&reward/pendingdisbursement" component={Dashboard}/>
        <Route exact path="/share&reward/processedrewards" component={Dashboard}/>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
