import axios from 'axios';
import Cookies from 'js-cookie';
import { logout } from 'utils/auth';

const apiClient = axios.create({
  baseURL: 'REACT_APP_BACKEND_URL/api/v1',
  // baseURL: 'http://localhost:8000/api/v1',
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = Cookies.get('user');

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// public routes
export const login = async (data) => {
  try {
    return await apiClient.post('/auth/login', data);
  } catch (error) {
    console.log(error);
    checkResponseCode(error);
    return { error: true, message: error.response?.data?.message };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post('/auth/register', data);
  } catch (error) {
    console.log(error);
    checkResponseCode(error);
    return { error: true, message: error.response?.data?.message };
  }
};

// secure routes
const checkResponseCode = (error) => {
  const responseCode = error?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};

export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friend-invitation/invite', data);
  } catch (error) {
    console.log(error);
    checkResponseCode(error);
    return { error: true, message: error.response?.data?.message };
  }
};

export const acceptFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friend-invitation/accept', data);
  } catch (error) {
    console.log(error);
    checkResponseCode(error);
    return { error: true, message: error.response?.data?.message };
  }
};
export const rejectFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friend-invitation/reject', data);
  } catch (error) {
    console.log(error);
    checkResponseCode(error);
    return { error: true, message: error.response?.data?.message };
  }
};
