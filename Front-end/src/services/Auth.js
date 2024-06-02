import axios from 'axios';
import toastr from 'toastr';
import Cookies from 'js-cookie';

class AuthService {
  constructor() {
    this.getCookie();
  }

  getCookie() {
    const cookie = Cookies.get('Session');
    return !!cookie;
  }

  checkUser(cookie) {
    if (cookie) {
      const CookieJson = JSON.parse(cookie);
      axios.post('http://localhost:50/user/granted', CookieJson.token, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          toastr.success('Autorisée');
          const isGranted = true;
          console.log(isGranted);
          return isGranted;
        })
        .catch(() => {
          toastr.error('Les token ne correspondent pas');
          const isGranted = false;
          Cookies.remove('Session');
          return isGranted;
        });
    }
  }

  logout() {
    this.formLogout = document.querySelector('.form-logout');

    this.formLogout.addEventListener('click', () => {
      Cookies.remove('Session');
    });
  }
}

export default AuthService;
