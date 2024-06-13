/* eslint-disable no-console */
import Cookies from 'js-cookie';

const Logout = class {
  constructor() {
    this.run();
  }

  run() {
    Cookies.remove('Session');
    window.location.href = '/';
  }
};

export default Logout;
