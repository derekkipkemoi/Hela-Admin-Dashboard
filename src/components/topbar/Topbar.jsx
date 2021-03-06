import { React, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./topbar.css";
import * as actions from "../../actions";
import {
  Menu,
  Logout,
  AccountCircle,
  NotificationsNone,
  ManageAccounts,
  Search,
  Calculate,
} from "@mui/icons-material";

class Topbar extends Component {
  state = {};

  componentDidMount = () => {};

  UserImageClicked = () => {
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

    if (navBar.classList.contains("show-side-nav")) {
      this.props.NavBarExpanded(true);
    } else {
      this.props.NavBarExpanded(false);
    }

    for (let menuItem = 0; menuItem < 15; menuItem++) {
      const newElement = document.getElementById(menuItem);
      newElement.classList.remove("nav-link-item");
    }
  };

  logOut = () => {
    this.props.LogOut();
    if (!this.props.isAuthenticated) {
      this.props.history.push("/signin");
    }
  };
  render() {
    return (
      <header className="shadow-sm header" id="header">
        <div className="d-flex align-items-center">
          <Link to={"/"} className="nav_logo">
            <img src={require("../assets/images/logo2.jpg")} alt="" />
          </Link>
          <div
            className="header_toggle text-dark"
            id="header_toggle"
            onClick={this.showNavbar}
          >
            <Menu />
          </div>

          <div className="top-bar-search">
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
        </div>

        <div className="d-flex">
          <div className="header-icons">
            <NotificationsNone />
          </div>
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
            <div
              class="ps-3 pt-2 pb-3 text-danger header-link"
              onClick={this.logOut}
            >
              <Logout /> Logout
            </div>
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
