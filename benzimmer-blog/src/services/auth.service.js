import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://api.benzimmer.us/auth/';
const axiosWithCreds = axios.create({withCredentials: true})

class AuthService {
  async login(user) {
    try {
      const response = await axiosWithCreds.post(API_URL + 'login', {
        email: user.email,
        password: user.password //,
        // headers: { withCredentials: true }
      });
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axiosWithCreds.post(API_URL + 'register', {
      username: user.username,
      email: user.email,
      password: user.password//,
      // headers:{ withCredentials: true }
    });
  }

  status(user) {
    return axiosWithCreds.get(API_URL + 'status', {
      username: user.username,
      email: user.email,
      password: user.password//,
      // headers:{ withCredentials: true }
    });
  }
}

export default new AuthService();