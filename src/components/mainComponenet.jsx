import React from 'react'
import React from "react";
import Featured from "../featured/Featured";
import Messages from "../messages/Messages";
import Sidebar from "../sidebar/Sidebar";
import Profile from "../userprofile/Profile";
import Topbar from "../topbar/Topbar";
import RolesAndPermissions from "../management/roles&permissions/RolesAndPermissions";
import StaffAndUsers from "./management/StaffAndUsers/StaffAndUsers";
import Dashboard from './dashboard/Dashboard';



const MainComponent = (props => {
  return (
    <main>
      <Topbar />
      <Sidebar />
      <Dashboard/>
    </main>
  )
  
});

export default MainComponent;