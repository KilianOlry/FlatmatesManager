import Cookies from 'js-cookie';

class AuthService {
  constructor() {
    this.currentlyCookie = this.getCookie();
    this.ifAdmin();
  }

  getCookie() {
    let cookie = Cookies.get('Session');
    if (cookie) {
      cookie = this.cookieToJson(cookie);
    } else {
      return false;
    }
    return cookie;
  }

  cookieToJson(cookie) {
    const cookieJson = JSON.parse(cookie);
    return cookieJson;
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
}

export default AuthService;
