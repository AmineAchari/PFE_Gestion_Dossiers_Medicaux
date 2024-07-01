import axios from 'axios';

const API_URL = 'http://localhost:8080/users/';

const login = (username, password) => {
  return axios.post(API_URL + 'authenticate', {
    username,
    password,
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const authService = {
  login,
  getCurrentUser,
};

export default authService;