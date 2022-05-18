import axios from "axios";

import { AUTH_SIGNIN, AUTH_ERROR, LOG_OUT } from "./actionTypes";

// let axiosConfig = {
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Accept-Encoding': 'gzip, deflate, sdch'
//   }
// };

const baseUrl = "https://helapesa.com";

export const SignIn = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(baseUrl + "/admin-api/user-login", data);
      switch (res.data.status) {
        case 200:
          dispatch({
            type: AUTH_SIGNIN,
            payLoad: {
              isAuthenticated: true,
              message: res.data.message,
              first_name: res.data.first_name,
              refund_status: res.data.refund_status,
              middle_name: res.data.middle_name,
              surname: res.data.surname,
              email: res.data.email,
              phone: res.data.phone,
              user_type: res.data.user_type
            },
          });
      }
    } catch (error) {
      if (error.response.status == 401)
        dispatch({
          type: AUTH_ERROR,
          payLoad: {
            message:
              "Check your phone number and password. Ensure you type in correctly",
            isAuthenticated: false,
          },
        });
    }
  };
};

export const LogOut =()=>{
  return (dispatch) => {
    dispatch({
      type: LOG_OUT,
      payLoad: {
        isAuthenticated: false,
        message: "",
      }
    })
  }
  

};
