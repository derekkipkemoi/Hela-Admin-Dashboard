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

const { faker } = require("@faker-js/faker");

const columns = [
  {
    name: "Name",
  },
  {
    name: "Phone",
  },
  {
    name: "National ID",
  },
  // {
  //   name: "Payroll",
  // },
  {
    name: "Loan Balance",
  },
  {
    name: "Advance Balance",
  },
  {
    name: "Company",
  },
  {
    name: "Gross Salary",
  },
  {
    name: "Net Salary",
  },
  {
    name: "Created At",
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
  phone,
  nationalId,
  payrollNumber,
  loanBalance,
  advanceBalance,
  company,
  grossSalary,
  netSalary,
  createdAt,
  userStatus
) {
  return {
    name,
    phone,
    nationalId,
    payrollNumber,
    loanBalance,
    advanceBalance,
    company,
    grossSalary,
    netSalary,
    createdAt,
    userStatus,
  };
}

for (let r = 0; r < 40; r++) {
  dataData[r] = createData(
    faker.name.findName(),
    faker.phone.phoneNumber(),
    faker.random.number(),
    faker.random.alphaNumeric(5),
    faker.finance.amount(),
    faker.finance.amount(),
    faker.company.bs(),
    faker.finance.amount(),
    faker.finance.amount(),
    faker.date.between("2020-01-01T00:00:00.000Z", "2022-01-01T00:00:00.000Z"),
    STATUSES[Math.floor(Math.random() * STATUSES.length)]
  );
}

class UsersDataTable extends Component {
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
      <div className="card-datatable mt-2">
        <div className="d-flex justify-content-between mt-2 mb-3">
          <div className="d-flex">
            <div className="col-md-3">
              <div className="actions-search-datatables">
                <Search className="ms-2" />
                <input
                  type="text"
                  className="input-section form-control shadow-none"
                  onChange={this.onSearch}
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="col-md-12">
              <button
                className="button-all"
                onClick={(e) => this.filterDataByStatus("All")}
              >
                All (573)
              </button>

              <button
                className="button-new"
                onClick={(e) => this.filterDataByStatus("Pending")}
              >
                Pending (12)
              </button>
              <button
                className="button-approved"
                onClick={(e) => this.filterDataByStatus("Active")}
              >
                Active (124)
              </button>
              <button
                className="button-declined"
                onClick={(e) => this.filterDataByStatus("Declined")}
              >
                Declined (26)
              </button>
              <button
                className="button-locked"
                onClick={(e) => this.filterDataByStatus("Locked")}
              >
                Locked (16)
              </button>
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
        <table id="bootstrapDataTable" className="data-table-class table">
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
                  <tr className="data-table-body-row" key={dataItem.nationalId}>
                    <td>{dataItem.name} </td>
                    <td>{dataItem.phone}</td>
                    <td>{dataItem.nationalId}</td>
                    {/* <td>{dataItem.payrollNumber}</td> */}
                    <td>{dataItem.loanBalance}</td>
                    <td>{dataItem.advanceBalance}</td>
                    <td>{dataItem.company}</td>
                    <td>{dataItem.grossSalary}</td>
                    <td>{dataItem.netSalary}</td>
                    <td>{dataItem.createdAt.toDateString()}</td>
                    <td
                      className={
                        dataItem.userStatus === "Active"
                          ? "user-table-status-active"
                          : null || dataItem.userStatus === "Declined"
                          ? "user-table-status-declined"
                          : null || dataItem.userStatus === "Pending"
                          ? "user-table-status-pending"
                          : null || dataItem.userStatus === "Locked"
                          ? "user-table-status-locked"
                          : null
                      }
                    >
                      {dataItem.userStatus}
                    </td>

                    <td style={{ width: "170px" }}>
                      <Link
                        data-tip
                        data-for="viewUser"
                        className="visibilityicon"
                        to={"users/viewuser"}
                      >
                        <Visibility />
                        <ReactTooltip id="viewUser" type="info" effect="solid">
                          <span>View User</span>
                        </ReactTooltip>
                      </Link>

                      {dataItem.userStatus === "Active" ? null : (
                        <span>
                          <span
                            data-tip
                            data-for="approveUser"
                            className="approveicon"
                            data-bs-toggle="modal"
                            data-bs-target="#approveUserModal"
                            onClick={(e) => this.getDataItemId(index)}
                          >
                            <DoneOutline />
                          </span>
                          <ReactTooltip
                            id="approveUser"
                            type="success"
                            effect="solid"
                          >
                            <span>Approve User</span>
                          </ReactTooltip>
                        </span>
                      )}
                      <Link
                        data-tip
                        data-for="editPermission"
                        className="editicon"
                        to={"users/viewuser"}
                      >
                        <Edit />
                      </Link>
                      <ReactTooltip
                        id="editPermission"
                        type="info"
                        effect="solid"
                      >
                        <span>Edit User</span>
                      </ReactTooltip>

                      {dataItem.userStatus === "Declined" ? null : (
                        <span>
                          <span
                            data-tip
                            data-for="deletePermission"
                            data-bs-toggle="modal"
                            data-bs-target="#declineUserModal"
                            className="deleteicon"
                            onClick={(e) => this.getDataItemId(index)}
                          >
                            <ThumbDownAlt />
                          </span>
                          <ReactTooltip
                            id="deletePermission"
                            type="error"
                            effect="solid"
                          >
                            <span>Decline User</span>
                          </ReactTooltip>
                        </span>
                      )}
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

export default UsersDataTable;
