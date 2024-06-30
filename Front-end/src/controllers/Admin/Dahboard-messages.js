/* eslint-disable no-console */
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/messages/dashboard';
import AuthService from '../../services/Auth';
import Utiles from '../../services/Utiles';
import AxiosQuery from '../../services/AxiosQuery';
import AdminService from '../../services/Admin';

const DashboardMessage = class extends AuthService {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.axiosQuery = new AxiosQuery();
    this.adminService = new AdminService();
    this.run();
  }

  async render(flatmates) {
    return `
      ${viewNav(this.currentlyCookie)}
      <div class='flex flex-col xl:flex-row p-3 md:pl-6 flex container_dashboard'>
         ${viewSidebar(flatmates)}
         ${viewContent()}
      </div>
    `;
  }

  getDataForm(user) {
    const formCreateMessage = document.querySelector('.form-create-message');
    formCreateMessage.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(formCreateMessage);
      const data = {
        title: formData.get('title'),
        message: formData.get('message'),
        idUser: user.id,
        idHome: user.home_id
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
      this.toggleSidebar = new Utiles();
    }
  }
};

export default DashboardMessage;
