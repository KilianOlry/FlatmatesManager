/* eslint-disable no-console */
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';

import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/dashboard/dashboard';

import ServiceAuth from '../../services/Auth';
import ServiceUtiles from '../../services/Utiles';
import ServiceAxiosQuery from '../../services/AxiosQuery';
import ServiceFlatmate from '../../services/Admin';

const Dashboard = class extends ServiceAuth {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.serviceAxiosQuery = new ServiceAxiosQuery();
    this.serviceFlatmate = new ServiceFlatmate();
    this.run();
  }

  async render(flatmates, tasks, expenses, calendar, messages) {
    return `

      ${viewNav(await this.user)}

      <div class='flex flex-col xl:flex-row p-3 md:pl-6 container_dashboard'>
        
        ${viewSidebar(flatmates)}
        ${viewContent(tasks, expenses, calendar, messages)}
      
      </div>
    `;
  }

  buildCalendar(task) {
    const hasTasks = Object.keys(task).length > 0;
    const calendarEl = document.querySelector('.calendar__dashboard');

    if (hasTasks) {
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
    this.serviceAxiosQuery.Put('http://localhost:50/expense/update', id);
  }

  sendDataTask(id) {
    this.serviceAxiosQuery.Put('http://localhost:50/task/update', id);
  }

  regarcheDom() {
    window.location.href = '/dashboard';
  }

  async run() {
    const user = await this.serviceFlatmate.getUser();

    if (user) {
      const flatmates = await this.serviceFlatmate.getFlatMates();

      const tasks = await this.serviceFlatmate.getTasks();

      const expenses = await this.serviceFlatmate.getExpenses();

      const messages = await this.serviceFlatmate.getMessages();

      this.el.innerHTML = await this.render(flatmates, tasks, expenses, messages);

      this.buildCalendar(tasks);

      this.getStatusExpense();
      this.getStatusTask();
      this.toggleSidebar = new ServiceUtiles();
    } else {
      this.el.innerHTML = '<p>Error loading dashboard. Please try again later.</p>';
    }
  }
};

export default Dashboard;
