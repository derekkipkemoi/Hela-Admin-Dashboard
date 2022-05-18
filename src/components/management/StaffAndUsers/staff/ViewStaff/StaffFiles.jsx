import { Delete, Download } from "@mui/icons-material";
import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

class StaffFiles extends Component {
  state = {};
  render() {
    return (
        <div>
            <h4 className="mt-4">Staff Registration Files</h4>
            <hr />
      <table id="bootstrapDataTable" className="data-table-class table">
        <thead>
          <tr className="data-table-head">
            <th>Agent</th>
            <th>File Name</th>
            <th>Time Uploaded</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr className="data-table-body-row">
            <td>John Doe</td>
            <td>National Id</td>
            <td>2022-05-11 09:00:41 </td>
            <td>
              <span
                data-tip
                data-for="deletefile"
                className="deleteicon"
              >
                <Delete />
                <ReactTooltip id="deletefile" type="error" effect="solid">
                  <span>Delete Staff File</span>
                </ReactTooltip>
              </span>

              <span
                data-tip
                data-for="downloadfile"
                className="approveicon"
              >
                <Download/>
                <ReactTooltip id="downloadfile" type="success" effect="solid">
                  <span>Download Staff File</span>
                </ReactTooltip>
              </span>
            </td>
          </tr>
          <tr className="data-table-body-row">
            <td>Mary Jane</td>
            <td>Photo</td>
            <td>2022-05-11 09:00:41 </td>
            <td>
              <span
                data-tip
                data-for="deletefile"
                className="deleteicon"
              >
                <Delete />
                <ReactTooltip id="deletefile" type="error" effect="solid">
                  <span>Delete Staff File</span>
                </ReactTooltip>
              </span>

              <span
                data-tip
                data-for="downloadfile"
                className="approveicon"
              >
                <Download/>
                <ReactTooltip id="downloadfile" type="success" effect="solid">
                  <span>Download Staff File</span>
                </ReactTooltip>
              </span>
            </td>
          </tr>
        </tbody>
      </table>


      <h4 className="mt-4">Staff Request Files</h4>
            <hr />
      <table id="bootstrapDataTable" className="data-table-class table">
        <thead>
          <tr className="data-table-head">
            <th>Agent</th>
            <th>File Name</th>
            <th>Time Uploaded</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr className="data-table-body-row">
            <td>John Doe</td>
            <td>National Id</td>
            <td>2022-05-11 09:00:41 </td>
            <td>
              <span
                data-tip
                data-for="deletefile"
                className="deleteicon"
              >
                <Delete />
                <ReactTooltip id="deletefile" type="error" effect="solid">
                  <span>Delete Staff File</span>
                </ReactTooltip>
              </span>

              <span
                data-tip
                data-for="downloadfile"
                className="approveicon"
              >
                <Download/>
                <ReactTooltip id="downloadfile" type="success" effect="solid">
                  <span>Download Staff File</span>
                </ReactTooltip>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
}

export default StaffFiles;
