import Router from './Router';
import Homepage from './controllers/Homepage';
import Login from './controllers/Login';

import './index.scss';

const routes = [{
  url: '/',
  controller: Homepage
},
{
  url: '/login',
  controller: Login
}];

new Router(routes);
