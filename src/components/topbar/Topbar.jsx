import { React, Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./topbar.css";
import * as actions from "../../actions";
import {
  Menu,
  Logout,
  Settings,
  AccountCircle,
  Person,
  Login,
  NotificationsNone,
  CircleNotifications,
  ManageAccounts,
  HailOutlined,
  Search,
} from "@mui/icons-material";

class Topbar extends Component {
  state = {};

  componentDidMount = () => {};

  UserImageClicked = () => {
    console.log("HailOutlined");
    const profileCard = document.getElementById("card-profile");

    profileCard.classList.toggle("card-profile-removed");
  };

  showNavbar = () => {
    const dashboardcontent = document.getElementById("dashboard-content"),
      headerToggle = document.getElementById("header_toggle"),
      navBar = document.getElementById("nav-bar");

    if (headerToggle && dashboardcontent && navBar) {
      dashboardcontent.classList.toggle("body-pd");
      headerToggle.classList.toggle("bx-x");
      navBar.classList.toggle("show-side-nav");
    }
  };

  logOut() {
    this.props.LogOut();
    if (!this.props.isAuthenticated) {
      this.props.history.push("/signin");
    }
  }
  render() {
    return (
      <header class="header" id="header">
        <div
          class="bx header_toggle text-dark"
          id="header_toggle"
          onClick={this.showNavbar}
        >
          <Menu />
        </div>

        <div className="col col-md-3 col-xl-3">
            <div className="actions-search-datatables">
              <Search className="ms-2" />
              <input
                type="text"
                className="input-section form-control shadow-none"
                onChange={this.onSearchMessages}
                placeholder="Search"
              />
            </div>
          </div>
        <div className="header-icons">
          <NotificationsNone />
        </div>
        <div class="header_img" onClick={this.UserImageClicked}>
          <img src={require("../assets/images/userprofile.png")} alt="" />
        </div>

        <div className="card-profile" id="card-profile">
          <div class="card" style={{ width: "12rem" }}>
            <Link class="ps-3 text-dark" to={"/profile"}>
              <AccountCircle /> My Account
            </Link>
            <Link class="ps-3 pt-2 text-dark" to={"/settings"}>
              <ManageAccounts /> Settings
            </Link>
            <Link class="ps-3 pt-2 pb-3 text-danger">
              <Logout /> Logout
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    first_name: state.auth.first_name,
    surname: state.auth.surname,
  };
};

export default connect(mapStateToProps, actions)(Topbar);
