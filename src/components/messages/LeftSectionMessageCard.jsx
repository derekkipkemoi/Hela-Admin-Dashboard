import React, { Component } from "react";
import { Search } from "@mui/icons-material";
import { messagesData } from "./data.jsx";

import TopMessagingIcons from "./TopMessagingIcons.jsx";

class LeftSectionMessageCard extends Component {
  state = {
    checked: 0,
    data: messagesData,
  };

  componentDidMount=()=>{
    
  }

  messageClicked = (index, senderId) => {
    this.setState({
      checked: index,
    });
    this.props.sendMessageCardEvent(senderId);
  };

  onSearchMessages = (event) => {
    const inputValue = event.target.value;
    this.filterMessages(inputValue);

    if (inputValue.length <= 0) {
      this.setState({
        data: messagesData,
      });
    }
  };

  filterMessages(inputValue) {
    const { data } = this.state;
    const filtered = data.filter(
      (item) =>
        item.message.includes(inputValue) ||
        item.sender.includes(inputValue) ||
        item.sentTime.includes(inputValue)
    );

    this.setState({
      data: filtered,
    });
  }

  render() {
    const unique = [];
    const uniqueObjects = [];
    for (var x = 0; x < this.state.data.length; x++) {
      const id = this.state.data[x].senderId;
      if (!unique.includes(id)) {
        unique.push(id);
        uniqueObjects.push(this.state.data[x]);
      }
    }

    return (
      <div>
        <div className="message-left-top-section m-2">
          <span className="ps-3 ">Recent</span>
          <hr className="mt-1" />
          <div className="m-3">
            <div className="left-search-section">
              <div className="message-left-icon-search-section">
                <Search />
              </div>
              <input
                type="text"
                className="message-left-input-section form-control shadow-none"
                onChange={this.onSearchMessages}
                placeholder="Search Messages"
              />
              <hr />
            </div>
          </div>

          <div className="list-message-cards">
            {uniqueObjects.slice(0, 45).map((messageItem, index) => {
              return (
                <div
                  className={
                    index === this.state.checked
                      ? "left-section-message-card-checked"
                      : "left-section-message-card"
                  }
                  key={index}
                  onClick={() =>
                    this.messageClicked(index, messageItem.senderId)
                  }
                >
                  <div className="">
                    <div class="card-left-message">
                      <div class="card-body">
                        <div className="row d-flex justify-content-evenly">
                          <span class="text-center card-title col fw-bold">
                            {messageItem.sender.substring(0, 12)}
                          </span>
                          <small class="text-center card-title col">
                            {messageItem.sentTime}
                          </small>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <div className="col-2 message-card-user-icon">
                          <img
                          src={messageItem.senderImage}
                          alt={""}
                         
                        />
                          </div>
                        
                        <div class="col-9 card-text fs-12 ms-4">
                          {messageItem.message.substring(0, 50)}
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default LeftSectionMessageCard;
