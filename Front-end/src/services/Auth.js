class Auth {
  constructor(authUser) {
    this.ifAuth = authUser;
    this.run();
  }

  authentification() {
    let ifLog = '';
    if (this.ifAuth) {
      ifLog = true;
      console.log('je suis connecté');
    } else {
      ifLog = false;
      console.log('je ne suis pas connecté');
    }
    return ifLog;
  }

  run() {
    this.authentification();
  }
}

export default Auth;
