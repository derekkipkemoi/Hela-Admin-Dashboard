import {
  Close,
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

import { connect } from "react-redux";
import * as actions from "../../actions";

import "./dataTables.css";

const { faker } = require("@faker-js/faker");

const columns = [
  {
    name: "Permission Name",
  },
  {
    name: "Permission Descriptions",
  },
  {
    name: "Permission Group",
  },
];

// let this.props.permissions = [];

// function createData(permissionName, permissionDescription, permissionGroup) {
//   return { permissionName, permissionDescription, permissionGroup };
// }

// for (let r = 0; r < 40; r++) {
//   this.props.permissions[r] = createData(
//     faker.name.jobTitle(),
//     faker.lorem.lines(2, 4),
//     faker.company.bsNoun()
//   );
// }

class PermissionsDataTable extends Component {
  state = {
    data: this.props.permissions,
    selectedPage: 1,
    pageSize: 10,
    data: this.props.permissions,
    columns: columns,
    pageCount: 0,
    initialItemInPage: 1,
    totalSizeInPage: 0,
    dataItemToDelete: null,
    permissionName: "",
    permissionGroup: "",
    permissionDescription: "",
    index: 0,
  };

  componentDidMount = () => {
    this.getPermissionsList();
    this.setState({
      pageCount: Math.ceil(this.state.data.length / this.state.pageSize),
      totalSizeInPage: this.state.pageSize,
    });
  };

  getPermissionsList = () => {
    this.props.getPermissions();
    console.log("Permissions", this.props.permissions, this.props.message);
  };

  filterData(inputValue) {
    const data = this.props.permissions;
    const filtered = data.filter(
      (item) =>
        item.permissionName.includes(inputValue) ||
        item.permissionDescription.includes(inputValue) ||
        item.permissionGroup.includes(inputValue)
    );

    this.setState({
      data: filtered,
    });
  }

  onSearch = (event) => {
    const inputValue = event.target.value;
    this.filterData(inputValue);

    if (inputValue.length <= 0) {
      this.setState({
        data: this.props.permissions,
      });
    }
  };

  changePage = (page) => {
    let startIndex = (page - 1) * this.state.pageSize;
    let slicedData = this.props.permissions.slice(startIndex);
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
        data: this.props.permissions,
        pageSize: value,
        pageCount: Math.ceil(this.props.permissions.length / value),
        totalSizeInPage: value,
        selectedPage: 1,
        initialItemInPage: 1,
      });
    }
    if (value === "all") {
      this.setState({
        data: this.props.permissions,
        pageSize: this.props.permissions.length,
        pageCount: Math.ceil(
          this.props.permissions.length / this.props.permissions.length
        ),
        totalSizeInPage: this.props.permissions.length,
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
      data: this.props.permissions.slice(startIndex),
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
      data: this.props.permissions.slice(startIndex),
      initialItemInPage: this.state.initialItemInPage + this.state.pageSize,
      totalSizeInPage: this.state.totalSizeInPage + this.state.pageSize,
    });
  };

  getDataItemId = (index) => {
    const dataItemFilteredByIndex = this.state.data[index];
    this.setState({
      dataItemToDelete: dataItemFilteredByIndex,
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
        <div className="d-flex justify-content-between mt-2 mb-3">
          <div className="col col-md-3 col-xl-3">
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
                    <tr className="data-table-body-row">
                      <td>{dataItem.permissionName} </td>
                      <td>{dataItem.permissionDescription}</td>
                      <td>{dataItem.permissionGroup}</td>
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
                {this.state.totalSizeInPage > this.props.permissions.length
                  ? this.props.permissions.length
                  : this.state.totalSizeInPage}{" "}
                of {this.props.permissions.length}
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
        <div
          class="modal fade"
          id="viewrole"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  <div class="view-title-modal">
                    <Visibility /> Permission
                  </div>
                </h5>
                <button
                  type="button"
                  className="close-modal-button"
                  data-bs-dismiss="modal"
                >
                  <Close />
                </button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label class="form-label">Permission Name</label>
                  <input
                    type="text"
                    disabled
                    className="form-control"
                    placeholder={this.state.permissionName}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Permission Group</label>
                  <input
                    type="text"
                    disabled
                    className="form-control"
                    placeholder={this.state.permissionGroup}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Permission Description</label>
                  <textarea
                    className="form-control"
                    disabled
                    placeholder={this.state.permissionDescription}
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* edit permission */}

        <div
          class="modal fade"
          id="editrole"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  <div class="edit-title-modal">
                    <Edit /> Permission
                  </div>
                </h5>
                <button
                  type="button"
                  className="close-modal-button"
                  data-bs-dismiss="modal"
                >
                  <Close />
                </button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label class="form-label">Permission Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={this.state.permissionName}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Permission Group</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={this.state.permissionGroup}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Permission Description</label>
                  <textarea
                    className="form-control"
                    placeholder={this.state.permissionDescription}
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="close-modal-button"
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

        {/* delete permission modal */}
        <div>
          <div
            class="modal fade"
            id="deletePermissionModal"
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
                    <div class="action-title-modal">Delete Permission</div>
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
                        <u>Permission Details</u>
                      </p>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">Name : </span>{" "}
                          <span className="modal-message-body">
                            {this.state.permissionName}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">Group : </span>{" "}
                          <span className="modal-message-body">
                            {this.state.permissionGroup}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="modal-message-header">
                            Description :{" "}
                          </span>
                          <span className="modal-message-body">
                            {this.state.permissionDescription}
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

function mapStateToProps(state) {
  let permissionList = [];
  let permissionsArrayed = Object.entries(
    state.userRolesAndPermissions.permissionsList
  );

  function createData(permissionName, permissionDescription, permissionGroup) {
    return { permissionName, permissionDescription, permissionGroup };
  }

  for (let x = 0; x < permissionsArrayed.length; x++) {
    let permissionGroupName = permissionsArrayed[x][0];
    let arrayedSub = Object.entries(permissionsArrayed[x][1]);
    for (let y = 0; y < arrayedSub.length; y++) {
      let permissionName = arrayedSub[y][0];
      let permissionDescription = arrayedSub[y][1];
      permissionList[y] = createData(
        permissionName,
        permissionDescription,
        permissionGroupName
      );
    }
  }
  return {
    permissions: permissionList,
    permissionsWithGroups: Object.entries(
      state.userRolesAndPermissions.permissionsList
    ),
    message: state.userRolesAndPermissions.message,
  };
}

export default connect(mapStateToProps, actions)(PermissionsDataTable);
