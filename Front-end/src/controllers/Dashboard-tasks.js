import axios from 'axios';
import viewNav from '../views/global/nav';
import viewSidebar from '../views/admin/global/sidebar';
import viewContent from '../views/admin/tasks/tasks';

const DashboardTask = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  async render() {
    return `
      ${viewNav()}
      <div class='sm:flex container_dashboard'>
         ${viewSidebar()}
         ${viewContent(await this.getCategorys())}
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

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default DashboardTask;
