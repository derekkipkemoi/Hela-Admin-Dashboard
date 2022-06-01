import {
  Close,
  Delete,
  DoneOutline,
  Edit,
  NavigateBefore,
  NavigateNext,
  Search,
  SkipNext,
  SkipPrevious,
  ThumbDownAlt,
  Visibility,
} from "@mui/icons-material";
import React, { Component } from "react";
import _ from "lodash";
import ReactTooltip from "react-tooltip";

import "./dataTables.css";
import { Link } from "react-router-dom";
import TablesMoreActions from "../reports/reportsDataTables/TablesMoreActions";

const { faker } = require("@faker-js/faker");

const columns = [
  {
    name: "Name",
  },
  {
    name: "Code",
  },
  {
    name: "Account Status",
  },
  {
    name: "Limit (%)",
  },
  {
    name: "Int. (%)",
  },
  {
    name: "Min Month",
  },
  {
    name: "Max Month",
  },
  {
    name: "4 To 6 Months Interest",
  },
  {
    name: "7 To 9 Months Interest",
  },
  {
    name: "10 To 12 Months Interest",
  },
  {
    name: "13 To 15 Months Interest",
  },
  {
    name: "16 To 18 Months Interest",
  },
  {
    name: "19 To 21 Months Interest",
  },
  {
    name: "22 To 24 Months Interest",
  },
  {
    name: "Phone",
  },
  {
    name: "Email",
  },
  {
    name: "Type",
  },
  {
    name: "Status",
  },
  {
    name: "Actions",
  },
];

let dataData = [];
let STATUSES = ["Pending", "Active", "Declined", "Locked"];

function createData(
  name,
  code,
  accountStatus,
  limit,
  int,
  minMonth,
  maxMonth,
  fourToSix,
  seventONine,
  tenToTwelve,
  thirteenToFifteen,
  sixteenToEighteen,
  nineteenToTwentyOne,
  twentyTwoToTwentyFour,
  phone,
  email,
  type,
  status
) {
  return {
    name,
    code,
    accountStatus,
    limit,
    int,
    minMonth,
    maxMonth,
    fourToSix,
    seventONine,
    tenToTwelve,
    thirteenToFifteen,
    sixteenToEighteen,
    nineteenToTwentyOne,
    twentyTwoToTwentyFour,
    phone,
    email,
    type,
    status,
  };
}

for (let r = 0; r < 40; r++) {
  dataData[r] = createData(
    faker.company.bs(),
    faker.random.alphaNumeric(5),
    STATUSES[Math.floor(Math.random() * STATUSES.length)],
    faker.random.number(3),
    faker.random.number(3),
    faker.random.number(3),
    faker.random.number(3),
    faker.random.number(3),
    faker.random.number(3),
    faker.random.number(3),
    faker.random.number(3),
    faker.random.number(3),
    faker.random.number(3),
    faker.random.number(3),
    faker.phone.phoneNumber(),
    faker.internet.exampleEmail(),
    faker.name.findName(),
    STATUSES[Math.floor(Math.random() * STATUSES.length)]
  );
}

class CompaniesDataTable extends Component {
  state = {
    data: dataData,
    selectedPage: 1,
    pageSize: 10,
    data: dataData,
    columns: columns,
    pageCount: 0,
    initialItemInPage: 1,
    totalSizeInPage: 0,
    dataItemToDelete: null,
    name: "",
    nationalId: "",
    company: "",
    phone: "",
    index: 0,
  };

  componentDidMount = () => {
    this.setState({
      pageCount: Math.ceil(this.state.data.length / this.state.pageSize),
      totalSizeInPage: this.state.pageSize,
    });
  };

  filterData(inputValue) {
    const data = dataData;
    const filtered = data.filter(
      (item) =>
        item.name.includes(inputValue) ||
        item.phone.includes(inputValue) ||
        item.company.includes(inputValue) ||
        item.payrollNumber.includes(inputValue)
    );

    this.setState({
      data: filtered,
    });
  }

  filterDataByStatus(status) {
    const data = dataData;
    const filtered = data.filter((item) => item.userStatus.includes(status));

    if (status === "All") {
      this.setState({
        data: dataData,
      });
    } else {
      this.setState({
        data: filtered,
      });
    }
  }

  onSearch = (event) => {
    console.log("Value", event.target.value);
    const inputValue = event.target.value;
    this.filterData(inputValue);

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

  getDataItemId = (index) => {
    const dataItemFilteredByIndex = this.state.data[index];
    this.setState({
      name: dataItemFilteredByIndex.name,
      nationalId: dataItemFilteredByIndex.nationalId,
      company: dataItemFilteredByIndex.company,
      phone: dataItemFilteredByIndex.phone,
    });
  };

  showPermission = (
    index,
    permissionName,
    permissionDescription,
    permissionGroup
  ) => {
    this.setState({
      permissionName: permissionName,
      permissionDescription: permissionDescription,
      permissionGroup: permissionGroup,
      index: index,
    });
  };

  render() {
    return (
      <div className="card-datatable">
        <div className="d-flex justify-content-between mb-3">
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
          <div className="pt-1 col d-flex justify-content-end col-md-3 col-xl-3">
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
                <span>Print Companies List</span>
              </ReactTooltip>
            </div>
          </div>
        </div>
        <div className="data-table-class">
          <table id="bootstrapDataTable" className="table-wrapper table">
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
                    <tr className="data-table-body-row" key={dataItem.code}>
                      <td>{dataItem.name} </td>
                      <td>{dataItem.code}</td>
                      <td>{dataItem.accountStatus}</td>
                      <td>{dataItem.limit}</td>
                      <td>{dataItem.int}</td>
                      <td>{dataItem.minMonth}</td>
                      <td>{dataItem.maxMonth}</td>
                      <td>{dataItem.fourToSix}</td>
                      <td>{dataItem.seventONine}</td>
                      <td>{dataItem.tenToTwelve}</td>
                      <td>{dataItem.thirteenToFifteen}</td>
                      <td>{dataItem.sixteenToEighteen}</td>
                      <td>{dataItem.nineteenToTwentyOne}</td>
                      <td>{dataItem.twentyTwoToTwentyFour}</td>
                      <td>{dataItem.phone}</td>
                      <td>{dataItem.email}</td>
                      <td>{dataItem.type}</td>
                      <td>{dataItem.status}</td>
                      <td>
                        <TablesMoreActions />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <tfooter>
            <nav className="d-flex flex-end justify-content-between">
              <div className="m-0">
                <span className="me-2 table-dropdown-pagesize-text">
                  Display
                </span>
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

        {/* role-modal */}

        {/* approve user modal */}

        <div>
          <div
            class="modal fade"
            id="approveUserModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div className="card-modal">
                  <div class="modal-header">
                    <div class="approve-message-modal-title">Approve User</div>
                    <button
                      type="button"
                      className="close-modal-button"
                      data-bs-dismiss="modal"
                    >
                      <Close />
                    </button>
                  </div>
                  <div class="modal-body">
                    <div className="row">
                      <p className="modal-message-header">
                        <u>User Details</u>
                      </p>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">Name : </span>{" "}
                          <span className="modal-message-body">
                            {this.state.name}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">
                            National ID No :{" "}
                          </span>{" "}
                          <span className="modal-message-body">
                            {this.state.nationalId}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">
                            Phone Number :{" "}
                          </span>
                          <span className="modal-message-body">
                            {this.state.phone}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">
                            Company :{" "}
                          </span>
                          <span className="modal-message-body">
                            {this.state.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="close-modal-button"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" class="confirm-modal-button">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* decline user modal */}
        <div>
          <div
            class="modal fade"
            id="declineUserModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div className="card-modal">
                  <div class="modal-header">
                    <div class="delete-message-modal-title">Decline User</div>
                    <button
                      type="button"
                      className="close-modal-button"
                      data-bs-dismiss="modal"
                    >
                      <Close />
                    </button>
                  </div>
                  <div class="modal-body">
                    <div className="row">
                      <p className="modal-message-header">
                        <u>User Details</u>
                      </p>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">Name : </span>{" "}
                          <span className="modal-message-body">
                            {this.state.name}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">
                            National ID No :{" "}
                          </span>{" "}
                          <span className="modal-message-body">
                            {this.state.nationalId}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">
                            Phone Number :{" "}
                          </span>
                          <span className="modal-message-body">
                            {this.state.phone}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">
                            Company :{" "}
                          </span>
                          <span className="modal-message-body">
                            {this.state.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="close-modal-button"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" class="confirm-modal-button">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompaniesDataTable;
