import Cookies from 'js-cookie';
import axios from 'axios';
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/dashboard/dashboard';

const Dashboard = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  render(members) {
    return `
      ${viewNav()}
      <div class='flex'>
         ${viewSidebar()}
         ${viewContent(members)}
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

  async getMembers(user) {
    try {
      const response = await axios.post('http://localhost:50/home/get', user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching members:', error);
      return null;
    }
  }

  async run() {
    const user = await this.getUser();
    if (user) {
      const members = await this.getMembers(user);

      this.el.innerHTML = await this.render(members);
    } else {
      this.el.innerHTML = '<p>Error loading dashboard. Please try again later.</p>';
    }
  }
};

export default Dashboard;
