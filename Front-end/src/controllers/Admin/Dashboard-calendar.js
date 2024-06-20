/* eslint-disable no-console */
import Cookies from 'js-cookie';
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

const Dashboard = class extends AuthService {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.axiosQuery = new AxiosQuery();
    this.run();
  }

  async getUser() {
    const data = JSON.parse(Cookies.get('Session'));
    const user = await this.axiosQuery.Post('http://localhost:50/user/:get', data);
    return user;
  }

  async getTasks(dataUser) {
    const tasks = await this.axiosQuery.Get(`http://localhost:50/task/${dataUser.id}`);
    return tasks;
  }

  async getFlatMates(user) {
    const flatmates = await this.axiosQuery.Post('http://localhost:50/home/get', user);
    return flatmates;
  }

  buildCalendar(task) {
    const hasTasks = Object.keys(task).length > 0;
    const calendarEl = document.getElementById('calendar');
    if (hasTasks) {
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

        events: task.map((item) => ({
          id: item.id,
          title: item.name,
          start: item.date_limit
        }))
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
      ${viewNav(this.currentlyCookie)}
      <div class='flex flex-col xl:flex-row p-3 md:pl-6 flex container_dashboard'>
         ${viewSidebar(flatmates)}
         ${viewContent()}
      </div>
    `;
  }

  async run() {
    // get currently user
    const user = await this.getUser();

    if (user) {
      // get members
      const flatmates = await this.getFlatMates(user);
      // get task about user
      const task = await this.getTasks(user);
      // render the display
      this.el.innerHTML = await this.render(flatmates);

      this.buildCalendar(task);
      this.toggleSidebar = new Utiles();
    }
  }
};

export default Dashboard;
