export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    return {
      withCredentials: true
    };
  } else {
    return {};
  }
}