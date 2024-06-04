// import axios from 'axios';
// import toastr from 'toastr';
import Cookies from 'js-cookie';

class AuthService {
  constructor() {
    this.currentlyCookie = this.getCookie();
    this.ifAdmin();
  }

  getCookie() {
    const cookie = Cookies.get('Session');
    return !!cookie;
  }

  ifAdmin() {
    const sessionCookie = Cookies.get('Session');

    if (!sessionCookie) {
      return false;
    }

    try {
      const cookieJson = JSON.parse(sessionCookie);
      return cookieJson.role === 'ADMIN';
    } catch (error) {
      return false;
    }
  }

  // async checkUser() {
  //   const cookie = JSON.parse(Cookies.get('Session'));
  //   let isGranted = '';
  //   if (cookie) {
  //     await axios.post('http://localhost:50/user/granted', cookie.token, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //       .then(() => {
  //         toastr.success('Autorisée');
  //         isGranted = true;
  //       })
  //       .catch(() => {
  //         toastr.error('Les tokens ne correspondent pas');
  //         isGranted = false;
  //       });
  //   } else {
  //     isGranted = false;
  //   }
  //   return isGranted;
  // }

  async runAuth() {
    // this.isGranted = await this.checkUser();
    this.getCookie();
  }
}

export default AuthService;
