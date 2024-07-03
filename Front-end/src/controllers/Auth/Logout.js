/* eslint-disable no-console */

import ServiceAuth from '../../services/Auth';

const Logout = class extends ServiceAuth {
  constructor() {
    super();
    this.run();
  }

  run() {
    this.logout();
    window.location.href = '/';
  }
};

export default Logout;
