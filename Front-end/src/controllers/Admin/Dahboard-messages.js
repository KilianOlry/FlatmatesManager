/* eslint-disable no-console */
import axios from 'axios';
import toastr, { error } from 'toastr';
import Cookies from 'js-cookie';
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/messages/dashboard';

const DashboardMessage = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  async render(flatmates) {
    return `
      ${viewNav()}
      <div class='sm:flex container_dashboard'>
         ${viewSidebar(flatmates)}
         ${viewContent()}
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
    } catch (response) {
      return null;
    }
  }

  async getFlatMates(user) {
    try {
      const response = await axios.post('http://localhost:50/home/get', user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (response) {
      console.error('Error fetching members:', error);
      return null;
    }
  }

  getDataForm(user) {
    const formCreateMessage = document.querySelector('.form-create-message');
    formCreateMessage.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(formCreateMessage);
      const data = {
        title: formData.get('title'),
        message: formData.get('message'),
        idUser: user.id,
        idHome: user.home_id
      };
      this.sendMessage(data);
    });
  }

  sendMessage(message) {
    axios.post('http://localhost:50/message/add', message, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response);
        toastr.success('Message publié au sein de la colocation');
      })
      .catch(() => {
        console.log(error);
        toastr.error('Erreur lors de l\'envoi du message');
      });
  }

  async run() {
    const user = await this.getUser();

    if (user) {
      const flatmates = await this.getFlatMates(user);
      this.el.innerHTML = await this.render(flatmates);
      this.getDataForm(user);
    }
  }
};

export default DashboardMessage;
