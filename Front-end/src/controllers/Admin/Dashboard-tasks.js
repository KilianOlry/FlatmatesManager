import Cookies from 'js-cookie';
import axios from 'axios';
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/tasks/tasks';

const DashboardTask = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  async render(flatmates) {
    return `
      ${viewNav()}
      <div class='sm:flex container_dashboard'>
         ${viewSidebar()}
         ${viewContent(await this.getCategorys(), flatmates)}
      </div>
    `;
  }

  async getCategorys() {
    const apiUrl = 'http://localhost:50/categorys';
    try {
      const response = await axios.get(apiUrl);
      const datas = response.data;
      return datas;
    } catch (error) {
      return error;
    }
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
    const flatmates = await this.getFlatMates(user);

    this.el.innerHTML = await this.render(flatmates);
  }
};

export default DashboardTask;
