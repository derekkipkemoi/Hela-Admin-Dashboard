import {
  ArrowBackIos,
  Cancel,
  Delete,
  Edit,
  NavigateBefore,
  NavigateNext,
  Search,
  SkipNext,
  SkipPrevious,
  Visibility,
} from "@mui/icons-material";
import React, { Component } from "react";
import _ from "lodash";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

import "./dataTables.css";

const { faker } = require("@faker-js/faker");

const columns = [
  {
    name: "Role Name",
  },
  {
    name: "Role Descriptions",
  },
  {
    name: "Role Actions",
  },
];

let dataData = [];

function createData(roleName, roleDescription) {
  return { roleName, roleDescription };
}

for (let r = 0; r < 40; r++) {
  dataData[r] = createData(faker.name.jobTitle(), faker.lorem.lines(1));
}

class RolesDataTable extends Component {
  state = {
    data: dataData,
    selectedPage: 1,
    pageSize: 10,
    data: dataData,
    columns: columns,
    pageCount: 0,
    initialItemInPage: 1,
    totalSizeInPage: 0,
    messageToDelete: null,
  };

  componentDidMount = () => {
    this.setState({
      pageCount: Math.ceil(this.state.data.length / this.state.pageSize),
      totalSizeInPage: this.state.pageSize,
    });
  };

  filterMessages(inputValue) {
    const data = dataData;
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

  onSearchMessages = (event) => {
    const inputValue = event.target.value;
    this.filterMessages(inputValue);

    if (inputValue.length <= 0) {
      this.setState({
        data: dataData,
      });
    }
  };

  changePage = (page) => {
    let startIndex = (page - 1) * this.state.pageSize;
    let slicedData = dataData.slice(startIndex);
    if (page === 1) {
      this.setState({
        selectedPage: page,
        totalSizeInPage: this.state.pageSize,
        initialItemInPage: 1,
        data: slicedData,
      });
    }
    if (page === this.state.pageCount) {
      let lastPageTotalData = this.state.pageCount * this.state.pageSize;
      this.setState({
        selectedPage: page,
        totalSizeInPage: lastPageTotalData,
        initialItemInPage: lastPageTotalData - this.state.pageSize + 1,
        data: slicedData,
      });
    }
  };

  changePageSize = (value) => {
    if (value !== "all") {
      this.setState({
        data: dataData,
        pageSize: value,
        pageCount: Math.ceil(dataData.length / value),
        totalSizeInPage: value,
        selectedPage: 1,
        initialItemInPage: 1,
      });
    }
    if (value === "all") {
      this.setState({
        data: dataData,
        pageSize: dataData.length,
        pageCount: Math.ceil(dataData.length / dataData.length),
        totalSizeInPage: dataData.length,
        selectedPage: 1,
        initialItemInPage: 1,
      });
    }
  };

  decrementPage = (event) => {
    if (this.state.selectedPage === 1) return;
    let page = this.state.selectedPage - 1;
    let startIndex = (page - 1) * this.state.pageSize;
    this.setState({
      selectedPage: this.state.selectedPage - 1,
      data: dataData.slice(startIndex),
      initialItemInPage: this.state.initialItemInPage - this.state.pageSize,
      totalSizeInPage: this.state.totalSizeInPage - this.state.pageSize,
    });
  };

  incrementPage = (event) => {
    if (this.state.selectedPage === this.state.pageCount) {
      return;
    }

    let page = this.state.selectedPage + 1;
    let startIndex = (page - 1) * this.state.pageSize;
    this.setState({
      selectedPage: this.state.selectedPage + 1,
      data: dataData.slice(startIndex),
      initialItemInPage: this.state.initialItemInPage + this.state.pageSize,
      totalSizeInPage: this.state.totalSizeInPage + this.state.pageSize,
    });
  };

  getMessageId = (index) => {
    const messagesFilteredByIndex = this.state.data[index];
    this.setState({
      messageToDelete: messagesFilteredByIndex,
    });
  };

  render() {
    return (
      <div className="card-datatable mt-2">
        <div className="d-flex justify-content-between mt-2 mb-3">
          <div className="col col-md-3 col-xl-3">
            <div className="actions-search-datatables">
              <Search className="ms-2" />
              <input
                type="text"
                className="input-section form-control shadow-none"
                onChange={this.onSearchMessages}
                placeholder="Search"
              />
            </div>
          </div>
          <div className="col d-flex justify-content-end col-md-3 col-xl-3">
          <div className="actions-top-icons-datatables">
              <img
                data-tip
                data-for="generateWORD"
                src={require("../assets/images/doc.png")}
                alt=""
              />
              <ReactTooltip id="generateWORD" type="info" effect="solid">
                <span>Generate WORD File</span>
              </ReactTooltip>
            </div>
            <div className="actions-top-icons-datatables">
              <img
                data-tip
                data-for="generatePDF"
                src={require("../assets/images/pdf.png")}
                alt=""
              />
              <ReactTooltip id="generatePDF" type="info" effect="solid">
                <span>Generate PDF File</span>
              </ReactTooltip>
            </div>
            <div className="actions-top-icons-datatables">
              <img
                data-tip
                data-for="generateXLSX"
                src={require("../assets/images/xls.png")}
                alt=""
              />
              <ReactTooltip id="generateXLSX" type="info" effect="solid">
                <span>Generate XLSX File</span>
              </ReactTooltip>
            </div>

            <div className="actions-top-icons-datatables">
              <img
                data-tip
                data-for="generateCSV"
                src={require("../assets/images/csv.png")}
                alt=""
              />
              <ReactTooltip id="generateCSV" type="info" effect="solid">
                <span>Generate CSV File</span>
              </ReactTooltip>
            </div>
            <div className="actions-top-icons-datatables">
              <img
                data-tip
                data-for="printMessage"
                src={require("../assets/images/printer.png")}
                alt=""
              />
              <ReactTooltip id="printMessage" type="info" effect="solid">
                <span>Print Messages List</span>
              </ReactTooltip>
            </div>
          </div>
        </div>
        <table id="bootstrapDataTable" class="data-table-class table">
          <thead>
            <tr className="data-table-head">
              {this.state.columns.map((column, index) => {
                return <th key={column.name}>{column.name}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.data
              .slice(0, this.state.pageSize)
              .map((dataItem, index) => {
                return (
                  <tr className="data-table-body-row">
                    <td>{dataItem.roleName} </td>
                    <td>{dataItem.roleDescription}</td>

                    <td style={{ width: "120px" }}>
                      <Link
                        data-tip
                        data-for="viewRole"
                        className="visibilityicon"
                        to={"/rolespermissions/viewrole"}
                      >
                        <Visibility />
                      </Link>
                      <ReactTooltip id="viewRole" type="info" effect="solid">
                        <span>View Role</span>
                      </ReactTooltip>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <tfooter>
          <nav className="d-flex flex-end justify-content-between">
            <div className="m-0">
              <span className="me-2 table-dropdown-pagesize-text">Display</span>
              <div className="btn-group">
                <button
                  className="table-dropdown-pagesize-button  dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {this.state.pageSize}
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      onClick={(e) => {
                        this.changePageSize(5);
                      }}
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      onClick={(e) => {
                        this.changePageSize(10);
                      }}
                    >
                      10
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      onClick={(e) => {
                        this.changePageSize(25);
                      }}
                    >
                      25
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      onClick={(e) => {
                        this.changePageSize(50);
                      }}
                    >
                      50
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      onClick={(e) => {
                        this.changePageSize("all");
                      }}
                    >
                      All
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="datatable-footer-data">
              Showing {this.state.initialItemInPage} -{" "}
              {this.state.totalSizeInPage > dataData.length
                ? dataData.length
                : this.state.totalSizeInPage}{" "}
              of {dataData.length}
            </div>
            <div>
              <ul className="pagination d-flex m-0">
                <span>
                  <SkipPrevious
                    className="pagination-items-periphery"
                    onClick={(e) => this.changePage(1)}
                  />
                </span>
                <span>
                  <NavigateBefore
                    className="pagination-increment"
                    onClick={(e) => this.decrementPage(e)}
                  />
                </span>

                <li>
                  <p className="page-link current-page-selected">
                    {this.state.selectedPage}
                  </p>
                </li>

                <span>
                  <NavigateNext
                    className="pagination-increment"
                    onClick={(e) => this.incrementPage(e)}
                  />
                </span>

                <span>
                  <SkipNext
                    className="pagination-items-periphery"
                    onClick={(e) => this.changePage(this.state.pageCount)}
                  />
                </span>
              </ul>
            </div>
          </nav>
        </tfooter>
      </div>
    );
  }
}

export default RolesDataTable;
