import React, { Component } from "react";
import Select from "react-select";

import {
  AddComment,
  CloseFullscreen,
  OpenInFull,
  Send,
  Star,
  TableView,
} from "@mui/icons-material";
import appData from "../appCommonData.json";
import { Link } from "react-router-dom";
const companiesOption = appData.companies;
class TopMessagingIcons extends Component {
  state = {
    selectedOption: "single",
    selectedOptionValue: null,
    expand: false,
  };

  onChangeRadioValue = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  handleChange = (selectedOptionValue) => {
    this.setState({ selectedOptionValue }, () =>
      console.log(`Option selected:`, this.state.selectedOptionValue)
    );
  };
  render() {
    return (
      <div>
        <div className="top-icons-section">
          <Link className="message-left-top-icons" to={"/messages/newmessage"}>
            <AddComment /> Message
          </Link>
        </div>
      </div>
    );
  }
}

export default TopMessagingIcons;
