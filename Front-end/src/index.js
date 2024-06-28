import Router from './Router';
import Homepage from './controllers/Homepage';
import Login from './controllers/Auth/Login';
import Register from './controllers/Auth/Register';
import Dashboard from './controllers/Admin/Dashboard';
import DashboardCalendar from './controllers/Admin/Dashboard-calendar';
import DashboardMessage from './controllers/Admin/Dahboard-messages';
import DashboardExpenses from './controllers/Admin/Dashboard-expenses';
import DashboardTask from './controllers/Admin/Dashboard-tasks';
import Logout from './controllers/Auth/Logout';
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
  url: '/logout',
  requireCookie: true,
  controller: Logout
},
{
  url: '/register',
  controller: Register
},
{
  url: '/dashboard',
  requireCookie: true,
  controller: Dashboard
},
{
  url: '/dashboard-calendar',
  requireCookie: true,
  controller: DashboardCalendar
},
{
  url: '/dashboard-tasks',
  requireCookie: true,
  controller: DashboardTask
},
{
  url: '/dashboard-expenses',
  requireCookie: true,
  controller: DashboardExpenses
},
{
  url: '/dashboard-messages',
  requireCookie: true,
  controller: DashboardMessage
}
];
new Router(routes);
