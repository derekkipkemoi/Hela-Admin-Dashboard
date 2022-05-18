import { AlternateEmail, Business, LocalPhone } from "@mui/icons-material";
import React, { Component } from "react";
import { messagesData } from "./data.jsx";

import "./messages.css";

class CurrentUser extends Component {
  state = {
    senderId: 1,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.getSenderId !== this.props.getSenderId) {
      this.setState({
        senderId: this.props.getSenderId,
      });
    }
  }
  render() {
    const senderId = this.state.senderId;

    const messagesFilteredBySenderid = messagesData.filter((id) => {
      return id.senderId === senderId;
    });
    return (
      <div>
        {messagesFilteredBySenderid[0] !== undefined ? (
          <div className="row current-user">
            <div className="row">
              <div className="d-flex justify-content-center user-image-section">
                <img src={messagesFilteredBySenderid[0].senderImage} alt="" />
              </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-center user-name-section">
                <div className="fw-bold muted">{messagesFilteredBySenderid[0].sender}</div>
              </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-center user-last-message-section">
                <div className="left m-0 p-0">Last Interacted: </div>
                <span className="right">{messagesFilteredBySenderid[0].sentTime}</span>
              </div>
            </div>

            <div className="col user-horizontal-line-section">
              <hr />
            </div>

            <div className="d-flex flex-column user-bottom-section">
              <div className="mt-3 user-email">
                <p className="m-0 fw-bold ">
                  <AlternateEmail /> Email:
                </p>
                <p className="m-0">support@coderthemes.com</p>
              </div>
              <div className="mt-3 user-phone">
                <p className="m-0 fw-bold ">
                  <LocalPhone /> Phone Number:
                </p>
                <p className="m-0">+1 456 9595 9594</p>
              </div>
              <div className="mt-3 mb-5 user-company">
                <p className="m-0 fw-bold ">
                  <Business /> Comapny:
                </p>
                <p className="m-0">Hela Capital</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default CurrentUser;
