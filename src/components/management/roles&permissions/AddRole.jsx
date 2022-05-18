import { ArrowBack, Star } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import "../management.css";

const { faker } = require("@faker-js/faker");
let rolePermissions = [];
function createData(rolePermission) {
  return { rolePermission };
}

for (let r = 0; r < 200; r++) {
  rolePermissions[r] = createData(faker.lorem.sentence(1));
}

class AddRole extends Component {
  state = {};
  render() {
    return (
      <div className="row add-section">
        <div className="fw-bold">Management</div>
        <div className="col d-flex">
          <div className="add-action">
            <div className="actions-name">Add New Role</div>
            <Link
              type="button"
              class="btn action-button"
              to={"/rolespermissions"}
            >
              <ArrowBack />
              Back
            </Link>
          </div>
        </div>

        <div className="card">
          <div class="card-body">
            <div className="row">
              <div class="col-sm-12 col-md-6 col-xl-6 mb-3">
                <label class="form-label">
                  Role Name{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type role name"
                />
              </div>
              <div className="col-sm-12 col-md-6 col-xl-6 mb-3">
                <label className="form-label">
                  Role Permissions{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
                <textarea
                  className="form-control"
                  placeholder="Type role description"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div class="col-sm-12 col-md-6 col-xl-6 mb-3">
                <label class="form-label">
                  Role Permissions{" "}
                  <Star className="text-danger" style={{ fontSize: "12px" }} />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRole;
