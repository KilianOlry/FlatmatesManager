/* eslint-disable no-console */
import Cookies from 'js-cookie';
import axios from 'axios';
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/account';

const Dashboard = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.userInformation = JSON.parse(Cookies.get('Session'));
    this.run();
  }

  render(flatmates) {
    return `
      ${viewNav()}
      <div class='sm:flex'>
         ${viewSidebar(flatmates)}
         ${viewContent(this.userInformation)}
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
    } catch (error) {
      console.error('Error fetching members:', error);
      return null;
    }
  }

  async run() {
    const user = await this.getUser();

    if (user) {
      const flatmates = await this.getFlatMates(user);
      this.el.innerHTML = this.render(flatmates);
    }
  }
};

export default Dashboard;
