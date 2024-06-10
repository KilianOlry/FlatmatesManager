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
  controller: Homepage
},
{
  url: '/login',
  controller: Login
},
{
  url: '/logout',
  controller: Logout
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
},
{
  url: '/dashboard-tasks',
  controller: DashboardTask
},
{
  url: '/dashboard-expenses',
  controller: DashboardExpenses
},
{
  url: '/dashboard-messages',
  controller: DashboardMessage
}
];
new Router(routes);
