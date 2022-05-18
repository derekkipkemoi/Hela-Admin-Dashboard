import React, { Component } from "react";

class PreviewRightSection extends Component {
  state = {};
  render() {
    return (
      <div className="preview-section d-flex align-items-center flex-column">
        <img
          src={require("../assets/images/send-message.png")}
          alt=""
          className="preview-chat-image"
        />
        <small className="p-0 m-0 muted">Send Messages to recent contacts</small>
        <small className="p-0 m-0 muted">Send Messages to new contact list</small>
        <small className="p-0 m-0 muted">View messages in table format</small>
      </div>
    );
  }
}

export default PreviewRightSection;
