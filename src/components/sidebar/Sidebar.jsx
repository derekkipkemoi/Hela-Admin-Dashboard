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
  KeyboardArrowRight,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const navLinks = [
  {
    linkName: "Home",
    to: "/",
    linkIcon: <Home style={{ fontSize: 23 }} />,
    subLink: [],
  },
  {
    linkName: "Messages",
    to: "/messages",
    linkIcon: <Forum style={{ fontSize: 23 }} />,
    subLink: [],
  },
  {
    linkName: "Reports",
    linkIcon: <Assessment style={{ fontSize: 23 }} />,
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
    linkIcon: <AdminPanelSettings style={{ fontSize: 23 }} />,
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
    linkIcon: <Business style={{ fontSize: 23 }} />,
    subLink: [
      {
        linkName: "Messages",
        to: "/messages",
        linkIcon: <Message style={{ fontSize: 20 }} />,
      },
      {
        linkName: "Messages",
        to: "/messages",
        linkIcon: <Message style={{ fontSize: 20 }} />,
      },
      {
        linkName: "Messages",
        to: "/messages",
        linkIcon: <Message style={{ fontSize: 20 }} />,
      },
    ],
  },
  {
    linkName: "Refferals",
    to: "/refferals",
    linkIcon: <ChangeCircle style={{ fontSize: 23 }} />,
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
    linkIcon: <Share style={{ fontSize: 23 }} />,
    subLink: [
      {
        linkName: "User Referrals",
        to: "/share&reward/userrefferals",
        linkIcon: <Message style={{ fontSize: 20 }} />,
      },
      {
        linkName: "Redeem Requests",
        to: "/share&reward/redeemrequests",
        linkIcon: <Message style={{ fontSize: 20 }} />,
      },
      {
        linkName: "Pending Disbursement",
        to: "/share&reward/pendingdisbursement",
        linkIcon: <Message style={{ fontSize: 20 }} />,
      },
      {
        linkName: "Processed Rewards",
        to: "/share&reward/processedrewards",
        linkIcon: <Message style={{ fontSize: 20 }} />,
      },
    ],
  },
  {
    linkName: "Reminders",
    to: "/messages",
    linkIcon: <NotificationsNone style={{ fontSize: 23 }} />,
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
    linkIcon: <AlignVerticalTop style={{ fontSize: 23 }} />,
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

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

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
    const navBar = document.getElementById("nav-bar");
    if (navBar.classList.contains("show-side-nav")) {
      const newElement = document.getElementById(index);
      newElement.classList.toggle("nav-link-item");

      const navCarret = document.getElementById(index + 100);
      navCarret.classList.toggle("nav_carret");
    }
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
  };

  expandMenu = (index) => {
    const newElement = document.getElementById(index);
    newElement.classList.toggle("nav-link-item");

    const navCarret = document.getElementById(index + 100);
    navCarret.classList.toggle("nav_carret");
  };

  render() {
    const styles = {
      largeIcon: {
        width: 60,
        height: 60,
      },
    };
    const links = navLinks;
    return (
      <div>
        <div className="l-navbar" id="nav-bar">
          <nav className="nav mt-2">
            <div>
              <div className="nav_list">
                {links.map((nav, index) => {
                  return (
                    <div className={index > 0 ? "mt-3" : null}>
                      <div
                        className="d-flex align-items-center"
                        id={nav.linkName}
                      >
                        <Link
                          to={
                            nav.linkName === "Home" ||
                            nav.linkName === "Messages"
                              ? nav.to
                              : null
                          }
                          className="d-flex nav_link"
                          key={index}
                          onClick={
                            nav.linkName === "Home" ||
                            nav.linkName === "Messages"
                              ? (e) => this.navItemHomeClicked(index)
                              : (e) => this.navItemClicked(index)
                          }
                        >
                          {!this.props.NavBarExpanded ? (
                            <HtmlTooltip
                              title={
                                <div className="card-sidebar-tooltip">
                                  <p className="fs-6">{nav.linkName}</p>
                                  {nav.subLink.map((subnav, index1) => {
                                    return (
                                      <div className="p-1">
                                        <p>
                                          <Link
                                            className="text-dark"
                                            to={subnav.to}
                                          >
                                            {subnav.linkName}
                                          </Link>
                                        </p>
                                      </div>
                                    );
                                  })}
                                </div>
                              }
                            >
                              <span className="side-bar-icon">
                                {nav.linkIcon}
                              </span>
                            </HtmlTooltip>
                          ) : (
                            <span className="side-bar-icon">
                              {nav.linkIcon}
                            </span>
                          )}

                          <span className="nav_name">{nav.linkName}</span>
                        </Link>
                        {nav.subLink.length > 0 ? (
                          <span
                            onClick={(e) => this.expandMenu(index)}
                            id={index + 100}
                            className="ms-auto"
                          >
                            <KeyboardArrowRight />
                          </span>
                        ) : null}
                      </div>
                      <div className="nav-sub-link mt-1" id={index}>
                        {nav.subLink.map((subnav, index1) => (
                          <Link
                            to={subnav.to}
                            className={index > 0 ? "mt-3" : null}
                            onClick={(e) => this.navItemClick(index, index1)}
                          >
                            <div className="sub-link">
                              <div id={"" + index + index1}>
                                <div className="sub-link-name p-2">
                                  {subnav.linkName}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
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
