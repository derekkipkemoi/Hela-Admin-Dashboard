import React, { Component } from "react";

import "./messages.css";
import LeftSectionMessageCard from "./LeftSectionMessageCard";
import RightSection from "./RightSection";
import TopMessagingIcons from "./TopMessagingIcons";
import CurrentUser from "./CurrentUser";
import { Refresh } from "@mui/icons-material";
import DataTablesFeatured from "../dataTables/DataTablesFeatured";
import MessagesDataTables from "../dataTables/MessagesDataTables";

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

  showMessagingTables=()=>{
    this.setState({
      showChat: false
    })
  }

  showChat=()=>{
    this.setState({
      showChat: true
    })
  }


  render() {
    return (
      <div class="px-1 py-3" id="custom-cards">
        <div class="pb-2 fw-bold">Messages</div>
        <div className="d-flex flex-row justify-content-between">
        
        <TopMessagingIcons/>

        <div className="col tabs-section">
          <div
            className={
              this.state.showChat ? "btn btn-tab-selected" : "btn btn-tab"
            }
            onClick={this.showChat}
          >
            Messaging
          </div>
          <div
            className={
              this.state.showChat ? "btn btn-tab" : "btn btn-tab-selected"
            }
            onClick={this.showMessagingTables}
          >
            More
          </div>

          <div className="refresh-management-button">
            <Refresh />
          </div>
        </div>
        </div>
        
        {this.state.showChat ? 
        <div class="row mt-2">
        <div class="col-sm-12 col-md-5 col-xl-3 col-xxl-3 ">
          <div class="card card-cover">
            <div className="message-left-section">
              <LeftSectionMessageCard
                sendMessageCardEvent={this.receiveMessageCardEvent}
              />
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-4 col-xl-6 col-xxl-6">
          <div class="card card-cover">
            <div className="message-right-section">
              <RightSection getSenderId={this.state.senderId} />
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-3 col-xl-3 col-xxl-3 ">
          <div class="card card-cover">
            <CurrentUser getSenderId={this.state.senderId} />
          </div>
        </div>
      </div>
        : null}

        {!this.state.showChat ? 
        <MessagesDataTables/>
        : null}
        
      </div>
    );
  }
}

export default Messages;