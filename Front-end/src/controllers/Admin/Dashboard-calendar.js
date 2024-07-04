/* eslint-disable no-console */
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/calendar';

import AuthService from '../../services/Auth';
import Utiles from '../../services/Utiles';
import AxiosQuery from '../../services/AxiosQuery';
import ServiceFlatmate from '../../services/Admin';

const Dashboard = class extends AuthService {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.axiosQuery = new AxiosQuery();
    this.serviceFlatmate = new ServiceFlatmate();
    this.run();
  }

  buildCalendar(tasks, expenses) {
    const hasTasks = Object.keys(tasks).length > 0;
    const calendarEl = document.getElementById('calendar');

    if (hasTasks) {
      const test = [
        ...tasks.map((item) => ({
          id: item.id,
          title: item.name,
          start: item.date_limit
        })),
        ...expenses.map((item) => ({
          id: item.id,
          title: item.name,
          start: item.date_limit
        }))
      ];

      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
        initialView: 'dayGridMonth',
        headerToolbar: {
          right: 'next',
          left: 'prev',
          center: 'title'
        },
        locale: 'fr',
        height: 735,

        events: test
      });
      calendar.render();
    } else {
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
        initialView: 'dayGridMonth',
        headerToolbar: {
          right: 'dayGridMonth,timeGridWeek,listWeek',
          left: 'prev, next',
          center: 'title'
        },
        locale: 'fr',
        height: 705
      });
      calendar.render();
    }
  }

  async render(flatmates) {
    return `
      
      ${viewNav(await this.user)}
      
      <div class='flex flex-col xl:flex-row p-3 md:pl-6 container_dashboard'>
         
        ${viewSidebar(flatmates)}
        ${viewContent()}
    
      </div>
    `;
  }

  async run() {
    const user = await this.serviceFlatmate.getUser();

    if (user) {
      const flatmates = await this.serviceFlatmate.getFlatMates();
      const tasks = await this.serviceFlatmate.getTasks();
      const expenses = await this.serviceFlatmate.getExpenses();

      this.el.innerHTML = await this.render(flatmates);
      this.buildCalendar(tasks, expenses);

      this.toggleSidebar = new Utiles();
    }
  }
};

export default Dashboard;
