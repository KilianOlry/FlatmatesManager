import Router from './Router';
import Search from './controllers/Homepage';

import './index.scss';

const routes = [{
  url: '/',
  controller: Search
}];

new Router(routes);
