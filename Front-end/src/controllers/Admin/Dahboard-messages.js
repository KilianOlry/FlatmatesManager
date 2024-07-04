/* eslint-disable no-console */
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/messages/form';

import ServiceAuth from '../../services/Auth';
import ServiceUtiles from '../../services/Utiles';
import ServiceAxiosQuery from '../../services/AxiosQuery';
import ServiceAdmin from '../../services/Admin';

const DashboardMessage = class extends ServiceAuth {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.axiosQuery = new ServiceAxiosQuery();
    this.adminService = new ServiceAdmin();
    this.run();
  }

  async render(flatmates) {
    return `

      ${viewNav(await this.user)}

      <div class='flex flex-col xl:flex-row p-3 md:pl-6 container_dashboard'>
         
        ${viewSidebar(flatmates)}
        ${viewContent()}
      
      </div>
    `;
  }

  getDataForm() {
    const formCreateMessage = document.querySelector('.form-create-message');
    formCreateMessage.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(formCreateMessage);
      const data = {
        title: formData.get('title'),
        message: formData.get('message'),
        userToken: this.getCookie()
      };
      this.sendMessage(data);
    });
  }

  sendMessage(message) {
    this.axiosQuery.Post('http://localhost:50/message/add', message);
  }

  async run() {
    const user = await this.adminService.getUser();

    if (user) {
      const flatmates = await this.adminService.getFlatMates();
      this.el.innerHTML = await this.render(flatmates);
      this.getDataForm(user);
      this.toggleSidebar = new ServiceUtiles();
    }
  }
};

export default DashboardMessage;
