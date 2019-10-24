import * as constants from './constants'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import setAuthToken from "../../../utils/setAuthToken";

export const loginUser = userData => dispatch => {
  axios
    .post("https://deco7381.herokuapp.com/api/auth", userData)
    .then(res => {
      //  save to local storage
      const token = res.data.token;
      // set token to ls


      localStorage.setItem("jwtToken", token);
      // Set auth token header auth
      setAuthToken(token);
      // Decode token and get user info and exp

      //   decode Bearer token

      const decoded = jwt_decode(token);

      // set current users

      dispatch(setCurrentUser(decoded))
    }).catch(err =>
      dispatch({
        type: constants.GET_ERRORS,
        payload: err.message
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: constants.SET_CURRENT_USER,
    payload: decoded
  }

};



export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};