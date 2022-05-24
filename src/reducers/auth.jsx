import { AUTH_SIGNIN, AUTH_ERROR, LOG_OUT } from "../actions/actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false,
  token: null,
  message: "",
  first_name: "",
  refund_status: "",
  middle_name: "",
  surname: "",
  email: "",
  phone: "",
  user_type: "",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGNIN:
      return {
        ...state,
        isAuthenticated: action.payLoad.isAuthenticated,
        token: action.payLoad.token,
        message: action.payLoad.message,
        first_name: action.payLoad.first_name,
        refund_status: action.payLoad.refund_status,
        middle_name: action.payLoad.middle_name,
        surname: action.payLoad.surname,
        email: action.payLoad.email,
        phone: action.payLoad.phone,
        user_type: action.payLoad.user_type,
      };

    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: action.payLoad.isAuthenticated,
        token: action.payLoad.token,
        message: action.payLoad.message,
      };

    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: action.payLoad.isAuthenticated,
        token: action.payLoad.token,
        message: action.payLoad.message,
      };

    default:
      return state;
  }
};
