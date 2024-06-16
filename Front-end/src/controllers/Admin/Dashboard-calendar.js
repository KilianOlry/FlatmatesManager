/* eslint-disable no-console */
import axios from 'axios';
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

const Dashboard = class extends AuthService {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.run();
  }

  async getUser() {
    try {
      const data = JSON.parse(Cookies.get('Session'));
      const response = await axios.post('http://localhost:50/user/:get', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async getTasks(dataUser) {
    try {
      const response = await axios.get(`http://localhost:50/task/${dataUser.id}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async getMembers(user) {
    try {
      const response = await axios.post('http://localhost:50/home/get', user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching members:', error);
      return null;
    }
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

  async render(members) {
    return `
      ${viewNav(this.currentlyCookie)}
      <div class='flex flex-col xl:flex-row p-3 md:pl-6 flex container_dashboard'>
         ${viewSidebar(members)}
         ${viewContent()}
      </div>
    `;
  }

  async run() {
    // get currently user
    const user = await this.getUser();

    if (user) {
      // get members
      const members = await this.getMembers(user);
      // get task about user
      const task = await this.getTasks(user);
      // render the display
      this.el.innerHTML = await this.render(members);

      this.buildCalendar(task);
      this.toggleSidebar = new Utiles();
    }
  }
};

export default Dashboard;
