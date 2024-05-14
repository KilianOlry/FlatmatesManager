import Router from './Router';
import Homepage from './controllers/Homepage';
import Login from './controllers/Login';
import Register from './controllers/Register';
import Dashboard from './controllers/Dashboard';
import './index.scss';

const routes = [{
  url: '/',
  controller: Homepage
},
{
  url: '/login',
  controller: Login
},
{
  url: '/register',
  controller: Register
},
{
  url: '/dashboard',
  controller: Dashboard
}
];
new Router(routes);
