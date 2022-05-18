import * as React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import TableFooter from "@mui/material/TableFooter";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
} from "@mui/material";

import { Close, Done, Edit, Visibility } from "@mui/icons-material";

import "../dataTables.css";

const { faker } = require("@faker-js/faker");

let ROLES = [];

function createData(roleName, roleDescription) {
  return { roleName, roleDescription };
}

// ROLES = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

for (let r = 0; r < 20; r++) {
  ROLES[r] = createData(faker.name.jobTitle(), faker.lorem.lines(1));
}

class PermissionsDataTables extends Component {
  state = {
    ROLES: ROLES,
    page: 0,
    rowsPerPage: 10,
    roleName: "",
    roleDescription: "",
    index: 0,
  };

  componentDidMount = () => {
    this.setState({
      ROLES: ROLES,
    });
  };

  showRole = (index, roleName, roleDescription) => {
    this.setState({
      roleName: roleName,
      roleDescription: roleDescription,
      index: index,
    });
  };

  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage,
    });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
  };

  render() {
    const TablePaginationActions = (props) => {
      const theme = useTheme();
      const { count, page, rowsPerPage, onPageChange } = props;

      const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
      };

      const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
      };

      const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
      };

      const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
      };

      return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
          <IconButton
            onClick={handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="first page"
          >
            {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
          </IconButton>
          <IconButton
            onClick={handleBackButtonClick}
            disabled={page === 0}
            aria-label="previous page"
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </IconButton>
          <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="next page"
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </IconButton>
          <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="last page"
          >
            {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
          </IconButton>
        </Box>
      );
    };

    TablePaginationActions.propTypes = {
      count: PropTypes.number.isRequired,
      onPageChange: PropTypes.func.isRequired,
      page: PropTypes.number.isRequired,
      rowsPerPage: PropTypes.number.isRequired,
    };

    let rows = [];

    function createData(roleName, roleDescription) {
      return { roleName, roleDescription };
    }

    for (let r = 0; r < 40; r++) {
      rows[r] = createData(faker.name.jobTitle(), faker.lorem.lines(1));
    }
    rows.sort((a, b) => (a.calories < b.calories ? -1 : 1));

    const emptyRows =
      this.state.page > 0
        ? Math.max(
            0,
            (1 + this.state.page) * this.state.rowsPerPage - rows.length
          )
        : 0;

    return (
      <div>
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
                    placeholder={this.state.roleName}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Permission Description</label>
                  <textarea
                    className="form-control"
                    disabled
                    placeholder={this.state.roleDescription}
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label class="form-label">Permission Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={this.state.roleName}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Permission Description</label>
                  <textarea
                    className="form-control"
                    placeholder={this.state.roleDescription}
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
                  <Close />
                </button>
                <button type="button" class="confirm-modal-button">
                  <Done />
                </button>
              </div>
            </div>
          </div>
        </div>
        <TableContainer className="card">
          <Table aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell className="fw-bold">Permission Name</TableCell>
                <TableCell className="fw-bold">
                  Permission Description
                </TableCell>
                <TableCell className="fw-bold">Permission Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(this.state.rowsPerPage > 0
                ? rows.slice(
                    this.state.page * this.state.rowsPerPage,
                    this.state.page * this.state.rowsPerPage +
                      this.state.rowsPerPage
                  )
                : rows
              ).map((row, index) => (
                <TableRow key={row.roleName}>
                  <TableCell>{row.roleName}</TableCell>
                  <TableCell>{row.roleDescription}</TableCell>
                  <TableCell>
                    <span
                      className="visibilityicon"
                      data-bs-toggle="modal"
                      data-bs-target="#viewrole"
                    >
                      <Visibility
                        onClick={() =>
                          this.showRole(
                            index,
                            row.roleName,
                            row.roleDescription
                          )
                        }
                      />
                    </span>{" "}
                    <span
                      className="editicon"
                      data-bs-toggle="modal"
                      data-bs-target="#editrole"
                    >
                      <Edit />
                    </span>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={this.handleChangePage}
                  onRowsPerPageChange={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default PermissionsDataTables;
