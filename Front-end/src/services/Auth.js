import Cookies from 'js-cookie';

class AuthService {
  constructor() {
    this.run();
  }

  checkStmtUser() {
    const currentlyCookie = Cookies.get('Session');
    return !!currentlyCookie;
  }

  run() {
    this.checkStmtUser();
  }
}

export default AuthService;
