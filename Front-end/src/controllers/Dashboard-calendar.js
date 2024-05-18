import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import viewNav from '../views/global/nav';
import viewSidebar from '../views/admin/global/sidebar';
import viewContent from '../views/admin/calendar';

const Dashboard = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  buildCalendar() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        right: 'prev,next today',
        center: 'title',
        left: 'dayGridMonth,timeGridWeek,listWeek'
      }
    });
    calendar.render();
  }

  render() {
    return `
      ${viewNav()}
      <div class='sm:flex'>
         ${viewSidebar()}
         ${viewContent()}
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.buildCalendar();
  }
};

export default Dashboard;
