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
  KeyboardArrowDown,
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
    linkIcon: <Forum />,
    subLink: [
      {
        linkName: "All Message",
        to: "/messages",
      },
      {
        linkName: "New Message",
        to: "/messages/newmessage",
      },

      {
        linkName: "Tabled Messages",
        to: "/messages/tabledmessages",
      },
    ],
  },
  {
    linkName: "Reports",
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
    currentSelectedIndexState: false,
    currentSelectedIndex: -1,
    links: [],
  };

  componentDidMount = () => {
    if (this.props.history.location.pathname === "/") {
      const navLinkElement = document.getElementById("Home");
      navLinkElement.classList.toggle("active");
    }

    if (this.props.history.location.pathname === "/messages") {
      const navLinkElement = document.getElementById("Messages");
      navLinkElement.classList.toggle("active");
    }

    if (this.props.history.location.pathname === "/rolespermissions") {
      const navLinkElement = document.getElementById("Management");
      navLinkElement.classList.toggle("active");
    }

    if (this.props.history.location.pathname === "/staffusers") {
      const navLinkElement = document.getElementById("Staff and Users");
      navLinkElement.classList.toggle("active");
    }
  };

  navItemClicked = (index) => {
    const newElement = document.getElementById(index);
    newElement.classList.toggle("nav-link-item");
  };

  navItemHomeClicked = (index) => {
    navLinks.forEach((link, index1) => {
      const navLinkElement = document.getElementById(link.linkName);
      navLinkElement.classList.remove("active");
      link.subLink.forEach((subLink, index2) => {
        const navLinkElement2 = document.getElementById("" + index1 + index2);
        navLinkElement2.classList.remove("active");
      });
    });

    const navLinkElement1 = document.getElementById(navLinks[index].linkName);
    navLinkElement1.classList.toggle("active");
  };

  navItemClick = (navIndex, navSubLinkIndex) => {
    navLinks.forEach((link, index1) => {
      const navLinkElement = document.getElementById(link.linkName);
      navLinkElement.classList.remove("active");
      link.subLink.forEach((subLink, index2) => {
        const navLinkElement2 = document.getElementById("" + index1 + index2);
        navLinkElement2.classList.remove("active");
      });
    });

    const navLinkElement = document.getElementById(navLinks[navIndex].linkName);
    navLinkElement.classList.toggle("active");

    const navLinkElement1 = document.getElementById(
      "" + navIndex + navSubLinkIndex
    );
    navLinkElement1.classList.toggle("active");

    this.setState({
      currentSelectedIndex: navIndex,
    });
  };

  expandMenu = (index) => {
    const newElement = document.getElementById(index);
    newElement.classList.toggle("nav-link-item");

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
              
              <div className="nav_list">
                {links.map((nav, index) => {
                  return (
                    <div>
                      <div className="d-flex">
                        <Link
                          id={nav.linkName}
                          to={nav.linkName === "Home" ? nav.to : null}
                          className="flex-row d-flex nav_link"
                          key={index}
                          onClick={
                            nav.linkName === "Home"
                              ? (e) => this.navItemHomeClicked(index)
                              : (e) => this.navItemClicked(index)
                          }
                        >
                          <span className="nav-item-icon fw-bold">
                            {nav.linkIcon}
                          </span>
                          <span className="nav_name">{nav.linkName}</span>
                        </Link>
                        {nav.subLink.length > 0 ? (
                          <span
                            onClick={(e) => this.expandMenu(index)}
                            className="nav_carret ms-auto mt-3 text-light"
                          >
                            <KeyboardArrowDown />
                          </span>
                        ) : null}
                      </div>
                      <div className="nav-sub-link" id={index}>
                        <ul>
                          {nav.subLink.map((subnav, index1) => (
                            <Link
                              to={subnav.to}
                              className={index > 0 ? "mt-4" : null}
                              onClick={(e) => this.navItemClick(index, index1)}
                            >
                              <div className="active-sublink-name">
                                <li id={"" + index + index1}>
                                  <div className="d-flex">
                                    <ArrowRightAlt className="sub-link-arrow" />
                                    <div className="sub-link-name">
                                      {subnav.linkName}
                                    </div>
                                  </div>
                                </li>
                              </div>
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
