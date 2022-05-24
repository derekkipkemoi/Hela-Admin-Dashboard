import axios from "axios";

import {
  AUTH_SIGNIN,
  AUTH_ERROR,
  LOG_OUT,
  USER_ROLES,
  ROLES,
  ROLE_DETAILS,
  PERMISSION_DETAILS,
} from "./actionTypes";

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
              token: res.headers.token,
              message: res.data.message,
              first_name: res.data.first_name,
              refund_status: res.data.refund_status,
              middle_name: res.data.middle_name,
              surname: res.data.surname,
              email: res.data.email,
              phone: res.data.phone,
              user_type: res.data.user_type,
            },
          });
          console.log("token and phone", res.headers.token, res.data.phone);
          localStorage.setItem("JWT_TOKEN", res.headers.token);
          localStorage.setItem("PHONE", res.data.phone);
      }
    } catch (error) {
      if (error.response.status == 401) {
        dispatch({
          type: AUTH_ERROR,
          payLoad: {
            isAuthenticated: false,
            token: null,
            message:
              "Check your phone number and password. Ensure you type in correctly",
          },
        });
      }
    }
  };
};

export const LogOut = () => {
  return (dispatch) => {
    localStorage.removeItem("JWT_TOKEN");
    localStorage.removeItem("PHONE");
    dispatch({
      type: LOG_OUT,
      payLoad: {
        isAuthenticated: false,
        token: null,
        message: "",
      },
    });
  };
};

export const getUserRoles = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const userPhone = localStorage.getItem("PHONE");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          phone: userPhone,
        },
      };
      const res = await axios.get(
        baseUrl + "/admin-api/get-user-roles",
        config
      );
      switch (res.data.status) {
        case 200:
          dispatch({
            type: USER_ROLES,
            payLoad: {
              role: res.data.role,
              user_permissions: res.data.user_permissions,
              message: res.data.message,
            },
          });
      }
    } catch (error) {
      if (error.response.status == 401) {
        localStorage.removeItem("JWT_TOKEN");
        localStorage.removeItem("PHONE");
        dispatch({
          type: AUTH_ERROR,
          payLoad: {
            isAuthenticated: false,
            token: null,
            message: "",
          },
        });
      }
    }
  };
};

export const getRoles = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const userPhone = localStorage.getItem("PHONE");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          phone: userPhone,
        },
      };
      console.log("Roles token and phone", token, userPhone);
      const res = await axios.get(
        baseUrl + "/admin-api/get-roles-and-permissions?type=1",
        config
      );
      // console.log("Roles response", res.data);
      switch (res.data.status) {
        case 200:
          dispatch({
            type: ROLES,
            payLoad: {
              roles: res.data.user_permissions,
              message: res.data.message,
            },
          });
      }
    } catch (error) {
      if (error.response.status == 401) {
        localStorage.removeItem("JWT_TOKEN");
        localStorage.removeItem("PHONE");
        dispatch({
          type: AUTH_ERROR,
          payLoad: {
            isAuthenticated: false,
            token: null,
            message: "",
          },
        });
      }
    }
  };
};

export const getRoleDetails = (role) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const userPhone = localStorage.getItem("PHONE");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          phone: userPhone,
        },
      };
      const res = await axios.get(
        baseUrl + "/admin-api/get-role-permissions?role_name=" + role,
        config
      );
      // console.log("Roles response", res.data.assigned_permissions);
      switch (res.data.status) {
        case 200:
          dispatch({
            type: ROLE_DETAILS,
            payLoad: {
              role: res.data.role,
              assigned_permissions: res.data.assigned_permissions,
              message: res.data.message,
            },
          });
      }
    } catch (error) {
      if (error.response.status == 401) {
        localStorage.removeItem("JWT_TOKEN");
        localStorage.removeItem("PHONE");
        dispatch({
          type: AUTH_ERROR,
          payLoad: {
            isAuthenticated: false,
            token: null,
            message: "",
          },
        });
      }
    }
  };
};

export const getPermissions = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      const userPhone = localStorage.getItem("PHONE");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          phone: userPhone,
        },
      };
      const res = await axios.get(
        baseUrl + "/admin-api/get-roles-and-permissions",
        config
      );
      console.log(
        "Permissions list",
        res.data.user_permissions,
        res.data.status
      );
      switch (res.data.status) {
        case 200:
          dispatch({
            type: PERMISSION_DETAILS,
            payLoad: {
              permissions: res.data.user_permissions,
              message: res.data.message,
            },
          });
      }
    } catch (error) {
      if (error.response.status == 401) {
        localStorage.removeItem("JWT_TOKEN");
        localStorage.removeItem("PHONE");
        dispatch({
          type: AUTH_ERROR,
          payLoad: {
            isAuthenticated: false,
            token: null,
            message: "",
          },
        });
      }
    }
  };
};
