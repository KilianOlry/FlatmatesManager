/* eslint-disable no-console */

import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/tasks/tasks';

import ServiceUtiles from '../../services/Utiles';
import ServiceAxiosQuery from '../../services/AxiosQuery';
import ServiceAdmin from '../../services/Admin';
import ServiceAuth from '../../services/Auth';

const DashboardTask = class extends ServiceAuth {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.axiosQuery = new ServiceAxiosQuery();
    this.adminService = new ServiceAdmin();
    this.run();
  }

  async render(categoriesTask, flatmates) {
    return `

      ${viewNav(await this.user)}

      <div class='flex flex-col xl:flex-row container_dashboard p-3 md:pl-6 gap-4'>
         
        ${viewSidebar(flatmates)}
        ${viewContent(categoriesTask, flatmates)}
      
      </div>
    `;
  }

  toggleModalForm() {
    const btn = document.querySelector('.btn-modal');
    const btnModal = document.querySelector('.modal-task');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btnModal.classList.toggle('ok');
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

  getDataForm() {
    const formCreateTask = document.querySelector('.create-task');
    formCreateTask.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(formCreateTask);
      const userToken = this.getCookie();
      const data = {
        userToken,
        date: formData.get('date'),
        flatmates: formData.get('flatmates'),
        category: formData.get('category'),
        priority: formData.get('priority'),
        description: formData.get('description')
      };

      this.sendData(data);
    });
  }

  sendData(data) {
    this.axiosQuery.Post('http://localhost:50/task/add', data);
  }

  async run() {
    const user = await this.adminService.getUser();

    if (user) {
      const flatmates = await this.adminService.getFlatMates();
      const categoriesTask = await this.adminService.getCategoriesTask();

      this.el.innerHTML = await this.render(categoriesTask, flatmates);

      this.getDataForm();
      await this.toggleModalForm();
      await this.closeToggleModal();
      this.toggleSidebar = new ServiceUtiles();
    }
  }
};

export default DashboardTask;
