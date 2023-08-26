import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://api.benzimmer.us/auth/';

class AuthService {
  login(user) {
    return axios.post(API_URL + 'login', {
        email: user.email,
        password: user.password,
        headers: { withCredentials: true }
      })
      .then(response => {
        if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch(err => { console.log(err) });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      username: user.username,
      email: user.email,
      password: user.password,
      headers:{ withCredentials: true }
    });
  }

  status(user) {
    return axios.get(API_URL + 'status', {
      username: user.username,
      email: user.email,
      password: user.password,
      headers:{ withCredentials: true }
    });
  }
}

export default new AuthService();