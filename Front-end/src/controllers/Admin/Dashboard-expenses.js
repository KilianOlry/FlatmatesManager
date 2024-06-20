/* eslint-disable no-console */
import Cookies from 'js-cookie';
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/expenses/expenses';
import Utiles from '../../services/Utiles';
import AxiosQuery from '../../services/AxiosQuery';

const DashboardExpenses = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.axiosQuery = new AxiosQuery();
    this.run();
  }

  async render(flatmates) {
    return `
      ${viewNav()}
      <div class='flex flex-col xl:flex-row container_dashboard p-3 md:pl-6 gap-4'>
         ${viewSidebar(flatmates)}
         ${viewContent(await this.getCategoriesExpenses(), flatmates)}
      </div>
    `;
  }

  async getUser() {
    const data = JSON.parse(Cookies.get('Session'));
    const user = await this.axiosQuery.Post('http://localhost:50/user/:get', data);
    return user;
  }

  async getCategoriesExpenses() {
    const categories = await this.axiosQuery.Get('http://localhost:50/category-expenses/getAll');
    return categories;
  }

  async getFlatMates(user) {
    const flatmates = this.axiosQuery.Post('http://localhost:50/home/get', user);
    return flatmates;
  }

  getDataForm() {
    const formCreateExpense = document.querySelector('.create-expense');
    formCreateExpense.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(formCreateExpense);
      const cookie = JSON.parse(Cookies.get('Session'));
      const { token } = cookie;
      const data = {
        tokenUser: token,
        date: formData.get('date'),
        flatmates: formData.get('flatmates'),
        category: formData.get('category'),
        priority: formData.get('priority'),
        description: formData.get('description'),
        price: formData.get('price')
      };
      this.sendData(data);
    });
  }

  sendData(data) {
    this.axiosQuery.Post('http://localhost:50/expense/add', data);
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
    const user = await this.getUser();
    if (user) {
      const flatmates = await this.getFlatMates(user);
      this.el.innerHTML = await this.render(flatmates);
      this.getDataForm();
      this.toggleModal();
      this.closeToggleModal();
      this.toggleSidebar = new Utiles();
    }
  }
};

export default DashboardExpenses;
