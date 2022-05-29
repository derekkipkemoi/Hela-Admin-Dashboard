import { BorderColor, FormatListBulletedRounded, GridViewRounded, ScheduleRounded, ShieldMoonRounded } from "@mui/icons-material";
import React, { Component } from "react";
import MessagesDataTables from "../dataTables/MessagesDataTables";
import NewMessage from "./NewMessage";

class MessagesNav extends Component {
  state = {
    tabValue: 1
  };
  switchTab=(tabValue)=>{
    this.setState({
      tabValue: tabValue
    })
  }
  render() {
    const cardStyle = {
      width: "18rem",
    };
    return (
      <div className="messages-holder">
        <div className="card-messages-nav">
          <div className="compose-message" onClick={(e)=>this.switchTab(4)}>
            <BorderColor style={{ fontSize: 15, color:"#fff"}}/> <span className="text-light">Compose</span>
          </div>
          <div className="messages-nav" onClick={(e)=>this.switchTab(1)}><GridViewRounded style={{ fontSize: 20}}/> <span className="messages-nav-text">All Messages</span></div>
          <div className="messages-nav" onClick={(e)=>this.switchTab(1)}><ShieldMoonRounded style={{ fontSize: 20}}/> <span className="messages-nav-text">System Messages</span></div>
          <div className="messages-nav" onClick={(e)=>this.switchTab(1)}><ScheduleRounded style={{ fontSize: 20}}/> <span className="messages-nav-text">Scheduled Messages</span></div>
        </div>
        <div className="card-messages-list">
          {this.state.tabValue === 1 ? <MessagesDataTables/> : null}
          {this.state.tabValue === 4 ? <NewMessage /> : null}
        </div>
      </div>
    );
  }
}

export default MessagesNav;
