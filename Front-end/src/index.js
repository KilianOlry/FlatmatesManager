import Router from './Router';
import Homepage from './controllers/Homepage';
import Login from './controllers/Login';
import Register from './controllers/Register';
import Dashboard from './controllers/Dashboard';
import DashboardMyProfil from './controllers/Dashboard-myprofil';
import DashboardCalendar from './controllers/Dashboard-calendar';
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
},
{
  url: '/dashboard-calendar',
  controller: DashboardCalendar
}
];
new Router(routes);