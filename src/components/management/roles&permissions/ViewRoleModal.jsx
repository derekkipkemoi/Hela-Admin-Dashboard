import React, { Component } from "react";

import { Add, Close, Done, Edit, Visibility } from "@mui/icons-material";

const { faker } = require("@faker-js/faker");

let rolePermissions = [];

function createData(rolePermission) {
  return { rolePermission };
}

for (let r = 0; r < 80; r++) {
  rolePermissions[r] = createData(faker.lorem.sentence(1));
}

class ViewRolesModal extends Component {
  state = {
    checked: true,
    rolePermissions: rolePermissions,
  };
  render() {
    return (
      <div data-bs-toggle="modal" data-bs-target="#viewrolemodal">
        <Visibility />
        <div
          class="modal fade"
          id="viewrolemodal"
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
                  <div class="action-title-modal">
                    <Add /> Add New Role
                  </div>
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label class="form-label">Role Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type role name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Type role description"
                    rows="3"
                  ></textarea>
                </div>
                <p className="mb-2">Select Role Permissions</p>
                <div class="row role-permissions">
                  {this.state.rolePermissions.map((item, index) => {
                    return (
                      <div class="col-md-3" key={index}>
                        <input
                          class="form-check-input me-1"
                          type="checkbox"
                          value=""
                        />
                        {item.rolePermission}
                      </div>
                    );
                  })}
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
      </div>
    );
  }
}

export default ViewRolesModal;
