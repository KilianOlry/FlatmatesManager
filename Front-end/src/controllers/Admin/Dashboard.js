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

  render(members, tasks) {
    return `
      ${viewNav()}
      <div class='flex'>
         ${viewSidebar()}
         ${console.log(tasks)}
         ${viewContent(members, tasks)}
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

  // changeColorPrioritytag(tasks) {
  //   const priorityTag = document.querySelector('.priority-tag');
  //   tasks.map((task) => {
  //     console.log(task.priority);
  //     priorityTag.classList.add('priority');
  //     return true;
  //   });
  // }

  async run() {
    const user = await this.getUser();
    if (user) {
      const members = await this.getMembers(user);

      const tasks = await this.getTasks(user);

      this.el.innerHTML = await this.render(members, tasks);
      this.changeColorPrioritytag(tasks);
    } else {
      this.el.innerHTML = '<p>Error loading dashboard. Please try again later.</p>';
    }
  }
};

export default Dashboard;
