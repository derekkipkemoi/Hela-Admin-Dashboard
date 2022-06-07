import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
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
const jwtToken = localStorage.getItem("JWT_TOKEN");

const loggerMiddleware = createLogger();

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      {
        auth: {
          token: jwtToken,
          isAuthenticated: jwtToken ? true : false,
        },
      },
      applyMiddleware(reduxThunk)
    )}
  >
    <BrowserRouter>
      <App>
        <Route exact path="/" component={AuthGuard(Dashboard)} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <Route exact path="/messages" component={AuthGuard(Dashboard)} />
        <Route
          exact
          path="/messages/tabledmessages"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/messages/newmessage"
          component={AuthGuard(Dashboard)}
        />
        <Route exact path="/settings" component={AuthGuard(Dashboard)} />
        <Route exact path="/profile" component={AuthGuard(Dashboard)} />

        <Route
          exact
          path="/rolespermissions"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/rolespermissions/addrole"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/rolespermissions/viewrole"
          component={AuthGuard(Dashboard)}
        />

        <Route
          exact
          path="/rolespermissions/updaterole"
          component={AuthGuard(Dashboard)}
        />

        <Route exact path="/users" component={AuthGuard(Dashboard)} />
        <Route exact path="/users/adduser" component={AuthGuard(Dashboard)} />
        <Route exact path="/users/viewuser" component={AuthGuard(Dashboard)} />
        <Route
          exact
          path="/users/updateuser"
          component={AuthGuard(Dashboard)}
        />

        <Route exact path="/staff" component={AuthGuard(Dashboard)} />
        <Route exact path="/staff/addstaff" component={AuthGuard(Dashboard)} />
        <Route exact path="/staff/viewstaff" component={AuthGuard(Dashboard)} />
        <Route
          exact
          path="/staff/updatestaff"
          component={AuthGuard(Dashboard)}
        />

        <Route exact path="/advancerequests" component={AuthGuard(Dashboard)} />
        <Route
          exact
          path="/advancerequests/alladvancerequests"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/pendingrequests"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/pendingpayslipshared"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/payslipshared"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/payrolldddpending"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/payrolldddone"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/receivedfrompayroll"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/revisedability"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/notonpayroll"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/pendingddbooked"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/declinedbyclients"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/stoporders"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/compliance"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/pendingdisbursment"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/approvedrequests"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/disbursedrequests"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/pendingdeclinerequests"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/declinedrequests"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/disbursmenterror"
          component={AuthGuard(Dashboard)}
        />

        <Route
          exact
          path="/advancerequests/topups"
          component={AuthGuard(Dashboard)}
        />

        <Route
          exact
          path="/advancerequests/uncaptureddisbursment"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/alladvancerequestsreports"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/requestsummary"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/searchrequests"
          component={AuthGuard(Dashboard)}
        />

        <Route exact path="/tscrequests" component={AuthGuard(Dashboard)} />
        <Route
          exact
          path="/advancerequests/alltscrequests"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/pendingtscrequests"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/paysliprequiredtsc"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/payslipsharedtsc"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/topuptsc"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/bookedtsc"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/duedeligencetsc"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/declinedfromrequeststsc"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/complianceadvancerequests"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/pendingdisbursmenttsc"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/approvedtscrequests"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/tscpendingdeclinedrequests"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/declinedrequeststsc"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/advancerequests/tscsearch"
          component={AuthGuard(Dashboard)}
        />

        <Route exact path="/refunds" component={AuthGuard(Dashboard)} />
        <Route
          exact
          path="/refunds/refundsrequests"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/refunds/activerequests"
          component={AuthGuard(Dashboard)}
        />

        <Route exact path="/m_pesa" component={AuthGuard(Dashboard)} />
        <Route
          exact
          path="/m_pesa/disbursement"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/m_pesa/paymentreceived"
          component={AuthGuard(Dashboard)}
        />

        <Route exact path="/refferals" component={AuthGuard(Dashboard)} />
        <Route
          exact
          path="/refferals/referralrewardcommissions"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/refferals/redeemcommissionrequests"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/refferals/agentreferralpromotionsreport"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/refferals/agentrewardcommissionreport"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/refferals/agentcommissionrequestreport"
          component={AuthGuard(Dashboard)}
        />

        <Route
          exact
          path="/share&reward/userrefferals"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/share&reward/redeemrequests"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/share&reward/pendingdisbursement"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/share&reward/processedrewards"
          component={AuthGuard(Dashboard)}
        />

        <Route exact path="/mobiloans" component={AuthGuard(Dashboard)} />

        <Route
          exact
          path="/mobiloans/generalreports"
          component={AuthGuard(Dashboard)}
        />

        <Route
          exact
          path="/mobiloans/activeloans"
          component={AuthGuard(Dashboard)}
        />

        <Route
          exact
          path="/mobiloans/overdueloans"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/mobiloans/loandefaulters"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/mobiloans/repaidloans"
          component={AuthGuard(Dashboard)}
        />

        <Route exact path="/loanrequests" component={AuthGuard(Dashboard)} />
        <Route
          exact
          path="/loanrequests/allloanrequests"
          component={AuthGuard(Dashboard)}
        />

        <Route exact path="/salary" component={AuthGuard(Dashboard)} />
        <Route
          exact
          path="/salary/salaryupdate"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/salary/salaryadvances"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/salary/salaryadvancesearch"
          component={AuthGuard(Dashboard)}
        />
        <Route exact path="/datasheets" component={AuthGuard(Dashboard)} />
        <Route
          exact
          path="/datasheets/datasheetsdata"
          component={AuthGuard(Dashboard)}
        />
        <Route exact path="/agencies" component={AuthGuard(Dashboard)} />
        <Route exact path="/companies" component={AuthGuard(Dashboard)} />
        <Route
          exact
          path="/companies/newcompany"
          component={AuthGuard(Dashboard)}
        />

        <Route exact path="/reminders" component={AuthGuard(Dashboard)} />
        <Route
          exact
          path="/reminders/newreminder"
          component={AuthGuard(Dashboard)}
        />

        <Route
          exact
          path="/salaryadvancereports"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/salaryadvancereports/advancereportssalaryadvance&interest"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/salaryadvancereports/advancereportsactiveadvance"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/salaryadvancereports/advancereportsadvanceoverdue"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/salaryadvancereports/advancereportsadvancedefaulters"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/salaryadvancereports/advancereportssalaryadvancerepaid"
          component={AuthGuard(Dashboard)}
        />
        <Route
          exact
          path="/salaryadvancereports/advancereportscompanysummaryreports"
          component={AuthGuard(Dashboard)}
        />

        <Route exact path="/systemsettings" component={AuthGuard(Dashboard)} />
        <Route exact path="/systemsettings/update" component={AuthGuard(Dashboard)} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
