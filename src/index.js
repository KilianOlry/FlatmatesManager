import Router from './Router';
import Homepage from './controllers/Homepage';
import Login from './controllers/Login';
import Register from './controllers/Register';
import Dashboard from './controllers/Dashboard';
import DashboardMyProfil from './controllers/Dashboard-myprofil';
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
},
{
  url: '/dashboard-myprofil',
  controller: DashboardMyProfil
}
];
new Router(routes);
