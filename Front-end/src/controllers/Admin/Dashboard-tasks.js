/* eslint-disable no-console */
// import toastr from 'toastr';
import Cookies from 'js-cookie';
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/tasks/tasks';
import Utiles from '../../services/Utiles';
import AxiosQuery from '../../services/AxiosQuery';

const DashboardTask = class {
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
         ${viewContent(await this.getCategoriesTask(), flatmates)}
      </div>
    `;
  }

  async getCategoriesTask() {
    const categoriesTask = await this.axiosQuery.Get('http://localhost:50/categorys');
    return categoriesTask;
  }

  async getUser() {
    const data = JSON.parse(Cookies.get('Session'));
    const user = await this.axiosQuery.Post('http://localhost:50/user/:get', data);
    return user;
  }

  async getFlatMates(user) {
    const flatmates = await this.axiosQuery.Post('http://localhost:50/home/get', user);
    return flatmates;
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
      const cookie = JSON.parse(Cookies.get('Session'));
      const { token } = cookie;
      const data = {
        tokenUser: token,
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
    const user = await this.getUser();

    if (user) {
      const flatmates = await this.getFlatMates(user);

      this.el.innerHTML = await this.render(flatmates);

      this.getDataForm();
      await this.toggleModalForm();
      await this.closeToggleModal();
      this.toggleSidebar = new Utiles();
    }
  }
};

export default DashboardTask;
