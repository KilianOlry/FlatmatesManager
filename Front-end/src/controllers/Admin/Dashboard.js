/* eslint-disable no-console */
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/dashboard/dashboard';
import AuthService from '../../services/Auth';
import Utiles from '../../services/Utiles';
import AxiosQuery from '../../services/AxiosQuery';
import AdminService from '../../services/Admin';

const Dashboard = class extends AuthService {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.axiosQuery = new AxiosQuery();
    this.adminService = new AdminService();
    this.run();
  }

  render(members, tasks, expenses, calendar, messages) {
    return `
      ${viewNav(this.currentlyCookie)}
      <div class='flex flex-col xl:flex-row p-3 md:pl-6 container_dashboard'>
        ${viewSidebar(members)}
        ${viewContent(tasks, expenses, calendar, messages)}
      </div>
    `;
  }

  buildCalendar(task) {
    const hasExpenses = Object.keys(task).length > 0;
    const calendarEl = document.querySelector('.calendar__dashboard');

    if (hasExpenses) {
      const calendar = new Calendar(calendarEl, {
        plugins: [timeGridPlugin],
        initialView: 'timeGridDay',
        headerToolbar: {
          right: 'next',
          left: 'prev',
          center: 'title'
        },
        slotMinTime: '07:00:00',
        locale: 'fr',
        height: 735,
        events: task.map((item) => ({
          id: item.id,
          title: item.name,
          start: item.date_limit
        }))
      });
      calendar.render();
    } else {
      const calendar = new Calendar(calendarEl, {
        plugins: [timeGridPlugin],
        initialView: 'timeGridDay',
        headerToolbar: {
          right: 'next',
          left: 'prev',
          center: 'title'
        },
        slotMinTime: '07:00:00',
        locale: 'fr',
        height: 735
      });
      calendar.render();
    }
  }

  getStatusTask() {
    const formStatusTasks = document.querySelectorAll('.change-status-task');

    formStatusTasks.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('.input-task');
        this.sendDataTask(input.value);
      });
    });
  }

  getStatusExpense() {
    const formStatusTasks = document.querySelectorAll('.change-status-expense');

    formStatusTasks.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('.input-expense');
        this.sendDataExpense(input.value);
      });
    });
  }

  sendDataExpense(id) {
    this.axiosQuery.Put('http://localhost:50/expense/update', id);
  }

  sendDataTask(id) {
    this.axiosQuery.Put('http://localhost:50/task/update', id);
  }

  regarcheDom() {
    window.location.href = '/dashboard';
  }

  async run() {
    const user = await this.adminService.getUser();

    if (user) {
      // Get members on flatmate
      const members = await this.adminService.getFlatMates();
      // Get tasks about user
      const tasks = await this.adminService.getTasks();
      // Get expenses about user
      const expenses = await this.adminService.getExpenses();
      // Get all messages about flatmate
      const messages = await this.adminService.getMessages();
      // Render view with all data
      this.el.innerHTML = this.render(members, tasks, expenses, messages);
      // Build calendar with tasks Users
      this.getStatusExpense();
      this.getStatusTask();
      this.buildCalendar(tasks);
      this.toggleSidebar = new Utiles();
    } else {
      this.el.innerHTML = '<p>Error loading dashboard. Please try again later.</p>';
    }
  }
};

export default Dashboard;
