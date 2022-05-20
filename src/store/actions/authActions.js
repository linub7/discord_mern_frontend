import * as api from 'api';
import Cookies from 'js-cookie';
import { openAlertMessage } from './alertActions';

export const authActions = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails) => dispatch(login(userDetails)),
    register: (userDetails) => dispatch(register(userDetails)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);

    if (response.error) {
      dispatch(openAlertMessage(response?.message));
    } else {
      const { userDetails } = response?.data;
      Cookies.set('user', JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
    }
  };
};

const register = (userDetails) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);

    if (response.error) {
      dispatch(openAlertMessage(response?.message));
    } else {
      const { userDetails } = response?.data;
      Cookies.set('user', JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
    }
  };
};
