import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./sidebar.css";

import {
  Home,
  Message,
  Assessment,
  AdminPanelSettings,
  ChangeCircle,
  NotificationsNone,
  Business,
  Share,
  Forum,
  AlignVerticalTop,
  ArrowDropDown,
  ArrowRightAlt,
} from "@mui/icons-material";

const navLinks = [
  {
    linkName: "Home",
    to: "/",
    linkIcon: <Home />,
    subLink: [],
  },
  {
    linkName: "Messages",
    to: "/messages",
    linkIcon: <Forum />,
    subLink: [
      {
        linkName: "New Message",
        to: "/messages/newmessage",
      },
    ],
  },
  {
    linkName: "Reports",
    to: "/advancerequests",
    linkIcon: <Assessment />,
    subLink: [
      {
        linkName: "Advance Requests",
        to: "/advancerequests",
      },

      {
        linkName: "TSC Requests",
        to: "/tscrequests",
      },

      {
        linkName: "Refunds",
        to: "/refunds",
      },
      {
        linkName: "M-PESA",
        to: "/m_pesa",
      },
    ],
  },
  {
    linkName: "Management",
    to: "/rolespermissions",
    linkIcon: <AdminPanelSettings />,
    subLink: [
      {
        linkName: "Roles and Permissions",
        to: "/rolespermissions",
      },
      {
        linkName: "Users",
        to: "/users",
      },
      {
        linkName: "Staff",
        to: "/staff",
      },
    ],
  },
  {
    linkName: "Agencies & Companies",
    to: "/",
    linkIcon: <Business />,
    subLink: [
      {
        linkName: "Messages",
        to: "/messages",
        linkIcon: <Message />,
      },
      {
        linkName: "Messages",
        to: "/messages",
        linkIcon: <Message />,
      },
      {
        linkName: "Messages",
        to: "/messages",
        linkIcon: <Message />,
      },
    ],
  },
  {
    linkName: "Refferals",
    to: "/refferals",
    linkIcon: <ChangeCircle />,
    subLink: [
      {
        linkName: "Refferals",
        to: "/refferals",
      },
      {
        linkName: "Referral Reward Commissions",
        to: "/refferals/referralrewardcommissions",
      },
      {
        linkName: "Redeem Commission Requests",
        to: "/refferals/redeemcommissionrequests",
      },
      {
        linkName: "Agent Referral Promotions Report",
        to: "/refferals/agentreferralpromotionsreport",
      },
      {
        linkName: "Agent Reward Commission Report",
        to: "/refferals/agentrewardcommissionreport",
      },
      {
        linkName: "Agent Commission Request Report",
        to: "/refferals/agentcommissionrequestreport",
      },
    ],
  },
  {
    linkName: "Share & Rewards",
    to: "/share&reward/userrefferals",
    linkIcon: <Share />,
    subLink: [
      {
        linkName: "User Referrals",
        to: "/share&reward/userrefferals",
        linkIcon: <Message />,
      },
      {
        linkName: "Redeem Requests",
        to: "/share&reward/redeemrequests",
        linkIcon: <Message />,
      },
      {
        linkName: "Pending Disbursement",
        to: "/share&reward/pendingdisbursement",
        linkIcon: <Message />,
      },
      {
        linkName: "Processed Rewards",
        to: "/share&reward/processedrewards",
        linkIcon: <Message />,
      },
    ],
  },
  {
    linkName: "Reminders",
    to: "/messages",
    linkIcon: <NotificationsNone />,
    subLink: [
      {
        linkName: "Messages",
        to: "/messages",
        linkIcon: <Message />,
      },
      {
        linkName: "Messages",
        to: "/messages",
        linkIcon: <Message />,
      },
      {
        linkName: "Messages",
        to: "/messages",
        linkIcon: <Message />,
      },
    ],
  },
  {
    linkName: "Top Ups",
    to: "/",
    linkIcon: <AlignVerticalTop />,
    subLink: [
      {
        linkName: "Messages",
        to: "/messages",
        linkIcon: <Message />,
      },
      {
        linkName: "Messages",
        to: "/messages",
        linkIcon: <Message />,
      },
      {
        linkName: "Messages",
        to: "/messages",
        linkIcon: <Message />,
      },
    ],
  },
];

class SideBar extends Component {
  state = {
    currentSelectedIndex: -1,
    links: [],
  };

  componentDidMount = () => {
    console.log("Did it mount", this.props.history.location.pathname);

    if (this.props.history.location.pathname === "/") {
      const navLinkElement = document.getElementById("Home");
      navLinkElement.classList.toggle("active");
    }

    if (this.props.history.location.pathname === "/messages") {
      const navLinkElement = document.getElementById("Messages");
      navLinkElement.classList.toggle("active");
    }

    if (this.props.history.location.pathname === "/rolespermissions") {
      const navLinkElement = document.getElementById("Roles and Permissions");
      navLinkElement.classList.toggle("active");
    }

    if (this.props.history.location.pathname === "/staffusers") {
      const navLinkElement = document.getElementById("Staff and Users");
      navLinkElement.classList.toggle("active");
    }
  };

  navItemClicked = (index) => {
    const selectedElement = document.getElementById(
      this.state.currentSelectedIndex
    );
    if (selectedElement) {
      selectedElement.classList.remove("nav-link-item");
    }

    navLinks.forEach((link) => {
      const navLinkElement = document.getElementById(link.linkName);
      navLinkElement.classList.remove("active");
    });
    const navLinkElement = document.getElementById(navLinks[index].linkName);
    navLinkElement.classList.toggle("active");
  };

  expandMenu = (index) => {
    const newElement = document.getElementById(index);
    if (newElement) {
      newElement.classList.toggle("nav-link-item");
    }
    this.setState({
      currentSelectedIndex: index,
    });
  };

  render() {
    const links = navLinks;
    return (
      <div>
        <div className="l-navbar" id="nav-bar">
          
          <nav className="nav">
          <div>
          <Link to={"/"} className="nav_logo"> <img src={require("../assets/images/logo2.jpg")} alt="" /></Link>
            <div className="nav_list">
              {links.map((nav, index) => {
                return (
                  <div id={nav.linkName}>
                    <Link
                      to={nav.to}
                      className="flex-row d-flex nav_link"
                      key={index}
                      onClick={(e) => this.navItemClicked(index)}
                    >
                      <span className="nav-item-icon fw-bold">
                        {nav.linkIcon}
                      </span>
                      <span className="nav_name fw-bold ">{nav.linkName}</span>
                      {nav.subLink.length > 0 ? (
                        <span
                          onClick={(e) => this.expandMenu(index)}
                          className="nav_carret ms-auto"
                        >
                          <ArrowDropDown />
                        </span>
                      ) : null}
                    </Link>
                    <div className="nav-sub-link" id={index}>
                      <ul>
                        {nav.subLink.map((subnav, index) => (
                          <Link
                            to={subnav.to}
                            className={index > 0 ? "mt-4" : null}
                            id={subnav.linkName}
                          >
                            <li className="fw-bold">
                              <ArrowRightAlt className="sub-link-arrow"/> {subnav.linkName}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            </div>

            <a href="#" className="nav_link">
              {/* <span class="nav_name">SignOut</span>{" "} */}
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(SideBar);
