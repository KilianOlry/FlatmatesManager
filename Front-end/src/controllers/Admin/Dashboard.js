/* eslint-disable no-console */
import toastr from 'toastr';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/dashboard/dashboard';
import AuthService from '../../services/Auth';

const Dashboard = class extends AuthService {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.run();
  }

  render(members, tasks, expenses, calendar) {
    return `
      ${viewNav(this.currentlyCookie)}
      <div class='p-3 md:pl-6 flex container_dashboard'>
        ${viewSidebar(members)}
        ${viewContent(tasks, expenses, calendar)}
      </div>
    `;
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

  buildCalendar(task) {
    const calendarEl = document.getElementById('calendar');
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: 'timeGridDay',
      headerToolbar: {
        right: 'next',
        left: 'prev',
        center: 'title'
      },
      locale: 'fr',
      height: 735,
      events: task.map((item) => ({
        id: item.id,
        title: item.title,
        start: item.start
      })),
      nowIndicator: true, // Indicateur pour l'heure actuelle
      initialDate: new Date() // Afficher la date d'aujourd'hui par défaut
    });
    calendar.render();
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

  async getExpenses(dataUser) {
    try {
      const response = await axios.get(`http://localhost:50/expense/${dataUser.id}`, {
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

  getStatusTask() {
    const formStatusTasks = document.querySelectorAll('.change-status-task');

    formStatusTasks.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('.test');
        console.log(input);
        this.sendDataTask(input.value);
      });
    });
  }

  getStatusExpense() {
    const formStatusTasks = document.querySelectorAll('.change-status-expense');

    formStatusTasks.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('.test');

        this.sendDataExpense(input.value);
      });
    });
  }

  sendDataExpense(id) {
    axios.post('http://localhost:50/expense/update', id, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response);
        toastr.success('Tâches terminé Félicitations !!');
      })
      .catch((response) => {
        console.log(response);
        toastr.error('Erreur lors de la mise à jour de la tâche');
      });
  }

  sendDataTask(id) {
    axios.post('http://localhost:50/task/update', id, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        toastr.success('Tâches terminé Félicitations !!');
      })
      .catch(() => {
        toastr.error('Erreur lors de la mise à jour de la tâche');
      });
  }

  async run() {
    const user = await this.getUser();
    if (user) {
      // Get members on flatmate
      const members = await this.getMembers(user);
      // Get tasks about user
      const tasks = await this.getTasks(user);
      // Get expenses about user
      const expenses = await this.getExpenses(user);
      // Render view with all data

      this.el.innerHTML = this.render(members, tasks, expenses);
      this.buildCalendar(tasks);
      this.getStatusTask();
      this.getStatusExpense();
    } else {
      this.el.innerHTML = '<p>Error loading dashboard. Please try again later.</p>';
    }
  }
};

export default Dashboard;
