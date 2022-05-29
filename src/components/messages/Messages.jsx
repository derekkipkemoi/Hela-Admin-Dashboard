import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./messages.css";
import LeftSectionMessageCard from "./LeftSectionMessageCard";
import RightSection from "./RightSection";
import TopMessagingIcons from "./TopMessagingIcons";
import CurrentUser from "./CurrentUser";
import { Refresh } from "@mui/icons-material";
import DataTablesFeatured from "../dataTables/DataTablesFeatured";
import MessagesDataTables from "../dataTables/MessagesDataTables";
import MessagesNav from "./MessagesNav";

class Messages extends Component {
  state = {
    showChat: true,
    senderId: 0,
    expand: false,
  };

  receiveMessageCardEvent = (senderId) => {
    this.setState({
      senderId: senderId,
    });
  };

  showMessagingTables = () => {
    this.setState({
      showChat: false,
    });
  };

  showChat = () => {
    this.setState({
      showChat: true,
    });
  };

  render() {
    return (
      <div>
        {this.props.location.pathname === "/messages" ? (
          <div>
            <MessagesNav />
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(Messages);
