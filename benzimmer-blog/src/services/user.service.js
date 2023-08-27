import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://api.benzimmer.us/auth/';
const axiosWithCookies = axios.create({withCredentials: true})

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axiosWithCookies.get(API_URL + 'status');
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();