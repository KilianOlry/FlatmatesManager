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

  toggleModal() {
    const btn = document.querySelector('.btn-modal');
    const btnModal = document.querySelector('.modal-task');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btnModal.classList.add('ok');
    });
  }

  closeToggleModal() {
    const closeModal = document.querySelector('.close-modal');
    const btnModal = document.querySelector('.modal-task');
    closeModal.addEventListener('click', (e) => {
      e.preventDefault();
      btnModal.classList.remove('ok');
    });
  }

  async run() {
    // const user = await this.getUser();
    // const flatmates = await this.getFlatMates(user);
    this.el.innerHTML = await this.render();
    this.toggleModal();
    this.closeToggleModal();
  }
};

export default DashboardExpenses;
