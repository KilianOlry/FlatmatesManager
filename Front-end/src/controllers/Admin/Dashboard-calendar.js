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

const Dashboard = class {
  constructor() {
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
      console.error('Error fetching user:', error);
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
      console.error('Error fetching user:', error);
      return null;
    }
  }

  buildCalendar(task) {
    const calendarEl = document.getElementById('calendar');
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        right: 'prev,next today',
        center: 'title',
        left: 'dayGridMonth,timeGridWeek,listWeek'
      },
      height: 750,
      events: task.map((item) => ({
        title: item.name,
        start: item.date_limit
      })),
      eventColor: '#5eeac8',
      backgroundColor: ''
    });
    calendar.render();
  }

  render(task) {
    return `
      ${viewNav()}
      <div class='sm:flex green-50'>
         ${viewSidebar(task)}
         ${viewContent()}
      </div>
    `;
  }

  async run() {
    // get currently user
    const user = await this.getUser();

    if (user) {
      // get task about user
      const task = await this.getTasks(user);
      // render the display
      this.el.innerHTML = this.render(task);

      this.buildCalendar(task);
    }
  }
};

export default Dashboard;
