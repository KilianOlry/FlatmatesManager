// import toastr from 'toastr';
// import Cookies from 'js-cookie';
import axios from 'axios';
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/expenses/expenses';

const DashboardExpenses = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  async render() {
    return `
      ${viewNav()}
      <div class='sm:flex container_dashboard'>
         ${viewSidebar()}
         ${viewContent(await this.getCategoriesExpenses())}
      </div>
    `;
  }

  async getCategoriesExpenses() {
    const apiUrl = 'http://localhost:50/category-expenses/getAll';
    try {
      const response = await axios.get(apiUrl);
      const datas = response.data;
      return datas;
    } catch (error) {
      return error;
    }
  }

  async run() {
    // const user = await this.getUser();
    // const flatmates = await this.getFlatMates(user);
    this.el.innerHTML = await this.render();
  }
};

export default DashboardExpenses;
