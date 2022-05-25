import { USER_ROLES, ROLES, ROLE_DETAILS, PERMISSION_DETAILS } from "../actions/actionTypes";

const DEFAULT_STATE = {
  role: "",
  roles: [],
  permissionsList: [],
  assigned_permissions: {},
  user_permissions: {},
  message: "",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case USER_ROLES:
      return {
        ...state,
        role: action.payLoad.role,
        user_permissions: action.payLoad.user_permissions,
        message: action.payLoad.message,
      };

    case ROLES:
      return {
        ...state,
        roles: action.payLoad.roles,
        message: action.payLoad.message,
      };

    case ROLE_DETAILS:
      return {
        ...state,
        role: action.payLoad.role,
        assigned_permissions: action.payLoad.assigned_permissions,
      };

    case PERMISSION_DETAILS:
      return{
        ...state,
        permissionsList: action.payLoad.permissionsList,
        message: action.payLoad.message
      }

    default:
      return state;
  }
};
