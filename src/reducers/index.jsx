import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import userRolesPermissionsReducer from "./userRolesPermissions";

export default combineReducers({
    form: formReducer,
    userRolesAndPermissions: userRolesPermissionsReducer,
    auth: authReducer
});