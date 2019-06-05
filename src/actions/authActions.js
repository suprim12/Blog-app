import * as types from "./type";
import axios from "axios";
import jwt_decode from "jwt-decode";
// Regiser User
export const registeruser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(response => history.push("/login"))
    .catch(err => {
      if (err.response && err.response.data) {
        dispatch({
          type: types.GET_ERRORS,
          payload: err.response.data
        });
      }
    });
};
// Login User
export const loginuser = (userData, history) => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      // Set To LocalStorage
      localStorage.setItem("jwtToken", token);
      // Set Token to Auth Header
      if (token) {
        axios.defaults.headers.common["auth-token"] = token;
      } else {
        delete axios.defaults.headers.common["auth-token"];
      }
      // GET USER FROM TOKEN
      const decoded = jwt_decode(token);
      // SET CURRENT USER
      dispatch(setCurrentUser(decoded));
      // Now Redirect to Posts
      history.push("/");
    })
    .catch(err => {
      if (err.response && err.response.data) {
        dispatch({
          type: types.GET_ERRORS,
          payload: err.response.data
        });
      }
    });
};

// Set Current User
export const setCurrentUser = decoded => {
  return {
    type: types.SET_CURRENT_USER,
    payload: decoded
  };
};

// logoutuser
export const logoutUser = () => dispatch => {
  // Remove localStorage
  localStorage.removeItem("jwtToken");
  // Remove Auth Token Header
  delete axios.defaults.headers.common["auth-token"];
  // Set Current User to Empty Object with isAuthenticated to false
  dispatch(setCurrentUser({}));
};
