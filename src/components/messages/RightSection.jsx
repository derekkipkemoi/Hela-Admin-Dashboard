import React, { Component } from "react";
import { Send } from "@mui/icons-material";
import { messagesData } from "./data.jsx";
import DataTablesFeatured from "../dataTables/DataTablesFeatured.jsx";
import PreviewRightSection from "./PreviewRightSection.jsx";

class RightSection extends Component {
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
      <div className="main-chat-section">
        {this.state.senderId > 0 ? (
          <div>
            {/* <div className="current-user-section">
              {messagesFilteredBySenderid[0] !== undefined ? (
                <span>
                  <img
                    src={messagesFilteredBySenderid[0].senderImage}
                    alt=""
                    className="chat-section-current-user-section-image"
                  />
                  <small className="ms-2 fs-5 fw-bold">
                    {messagesFilteredBySenderid[0].sender}
                  </small>
                </span>
              ) : null}
            </div> */}
            <div className="chat-section">
              {messagesFilteredBySenderid.map((messageItem, index) => {
                return (
                  <div className="d-flex flex-row-reverse message-user-section">
                    <div className="message-chat-user-icon">
                      <img src={messageItem.senderImage} alt={""} />
                      <small className="chat-card-date">
                        {messageItem.sentTime}
                      </small>
                    </div>
                    <div className="p-0 card chatMessageCard" key={index}>
                      <small className="d-flex flex-row-reverse chat-card-sender">
                        {messageItem.sender}
                      </small>
                      <div className="card-body-message-right">
                        {messageItem.message}
                      </div>
                      {/* <div className="card-title  d-flex justify-content-end">
                      <small className="chat-card-date">
                        {messageItem.sentTime}
                      </small>
                    </div> */}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="typeMessageSection">
              <div className="input-group">
                <input
                  class="form-control"
                  aria-label="With textarea"
                  placeholder="Type a message"
                ></input>

                <div class="chat-send-message" type="button">
                  <Send />
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {this.state.senderId === -1 ? (
          <div>
            <div className="row mt-3">
              <div className="col">
                <div className="card">
                  <div className="chart-header card-header ">
                    <div className="chart-header-name fw-bold">DataTables</div>
                  </div>
                  <DataTablesFeatured />
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {this.state.senderId === 0 ? <PreviewRightSection /> : null}
      </div>
    );
  }
}

export default RightSection;
