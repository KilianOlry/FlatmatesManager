import Cookies from 'js-cookie';

class AuthService {
  constructor() {
    this.run();
  }

  checkStmtUser() {
    let stmtUser = '';
    const currentlyCookie = Cookies.get('Session');
    if (currentlyCookie) {
      stmtUser = true;
    } else {
      stmtUser = false;
    }
    return stmtUser;
  }

  run() {
    this.checkStmtUser();
  }
}

export default AuthService;
