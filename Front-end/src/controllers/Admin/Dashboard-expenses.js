/* eslint-disable no-console */
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/expenses/expenses';

import ServiceAuth from '../../services/Auth';
import ServiceUtiles from '../../services/Utiles';
import ServiceAxiosQuery from '../../services/AxiosQuery';
import ServiceAdmin from '../../services/Admin';

const DashboardExpenses = class extends ServiceAuth {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.axiosQuery = new ServiceAxiosQuery();
    this.adminService = new ServiceAdmin();
    this.run();
  }

  async render(categoriesExpenses, flatmates) {
    return `
      
      ${viewNav(await this.user)}
      
      <div class='flex flex-col xl:flex-row container_dashboard p-3 md:pl-6 gap-4'>
         
        ${viewSidebar(flatmates)}
        ${viewContent(categoriesExpenses, flatmates)}
      
      </div>
    `;
  }

  getDataForm() {
    const formCreateExpense = document.querySelector('.create-expense');
    formCreateExpense.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(formCreateExpense);
      const data = {
        userToken: this.adminService.getCookie(),
        date: formData.get('date'),
        flatmates: formData.get('flatmates'),
        category: formData.get('category'),
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
    const user = await this.adminService.getUser();

    if (user) {
      const flatmates = await this.adminService.getFlatMates();
      const categoriesExpenses = await this.adminService.getCategoriesExpenses();
      this.el.innerHTML = await this.render(categoriesExpenses, flatmates);
      this.getDataForm();
      this.toggleModal();
      this.closeToggleModal();
      this.toggleSidebar = new ServiceUtiles();
    }
  }
};

export default DashboardExpenses;
