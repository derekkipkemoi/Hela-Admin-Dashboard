import * as React from "react";
import { Add, Close, Done } from "@mui/icons-material";

const { faker } = require("@faker-js/faker");



function createData(rolePermission) {
  return { rolePermission };
}



export default function AddPermissionModal() {


  return (
    <div>
      <div
        type="button"
        class="btn action-button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <Add />
        Permission
      </div>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                <div class="action-title-modal">
                  <Add /> Permission
                </div>
              </h5>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label class="form-label">Permission Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type permission name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Permission Description</label>
                <textarea
                  className="form-control"
                  placeholder="Type permission description"
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
    </div>
  );
}
