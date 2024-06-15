import Cookies from 'js-cookie';
import Error404 from './controllers/Error404';

const Router = class {
  constructor(routes = []) {
    this.path = window.location.pathname;
    this.params = !window.location.search ? {} : Object.fromEntries(
      window.location.search
        .split('?')[1]
        .split('&')
        .map((param) => param.split('='))
    );
    this.routes = routes;

    this.run();
  }

  startController() {
    let ifExist = false;

    for (let i = 0; i < this.routes.length; i += 1) {
      const route = this.routes[i];
      const ifCookieSet = this.getCookie();
      // eslint-disable-next-line max-len
      if (route.url === this.path) {
        if (route.requireCookie === undefined || route.requireCookie === ifCookieSet) {
          const Controller = route.controller;
          new Controller(this.params);
          ifExist = true;
          break;
        } else {
          window.location.href = '/login';
        }
      }
    }

    if (!ifExist) {
      new Error404();
    }
  }

  getCookie() {
    const cookie = Cookies.get('Session');
    return !!cookie;
  }

  run() {
    this.startController();
  }
};

export default Router;
