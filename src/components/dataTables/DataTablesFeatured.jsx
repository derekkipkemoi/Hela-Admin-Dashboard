import React, { Component } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./data";

class DataTablesFeatured extends Component {
  state = {};


  render() {
    const tableData = {
      columns,
      data,
    };
    return (
        <div>
        <DataTableExtensions {...tableData}>
          <DataTable
            columns={columns}
            data={data}
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
          />
        </DataTableExtensions>
      </div>
    );
  }
}

export default DataTablesFeatured;
