import Router from './Router';
import Homepage from './controllers/Homepage';
import Login from './controllers/Auth/Login';
import Register from './controllers/Auth/Register';
import Dashboard from './controllers/Admin/Dashboard';
import DashboardMyProfil from './controllers/Admin/Dashboard-myprofil';
import DashboardCalendar from './controllers/Admin/Dashboard-calendar';
import DashboardMessage from './controllers/Admin/Dahboard-messages';
import DashboardExpenses from './controllers/Admin/Dashboard-expenses';
import DashboardTask from './controllers/Admin/Dashboard-tasks';
import Logout from './controllers/Auth/Logout';
import './index.scss';

const routes = [{
  url: '/',
  requireCookie: false,
  controller: Homepage
},
{
  url: '/login',
  requireCookie: false,
  controller: Login
},
{
  url: '/logout',
  requireCookie: false,
  controller: Logout
},
{
  url: '/register',
  requireCookie: false,
  controller: Register
},
{
  url: '/dashboard',
  requireCookie: true,
  controller: Dashboard
},
{
  url: '/dashboard-myprofil',
  requireCookie: true,
  controller: DashboardMyProfil
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
