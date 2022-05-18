import { Add, Close, Done, Visibility } from '@mui/icons-material';
import React, { Component } from 'react';
import EditUserModal from './EditUserModal';



class AddUserModal extends Component {
    state = {  } 
    render() { 
        return (
            <div>
      <div
        type="button"
        class="btn action-button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <Add />
        User
      </div>

      <div
        class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                <div class="action-title-modal">
                  <Add /> User
                </div>
              </h5>
            </div>
            <div class="modal-body">
                <EditUserModal/>
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
 
export default AddUserModal;