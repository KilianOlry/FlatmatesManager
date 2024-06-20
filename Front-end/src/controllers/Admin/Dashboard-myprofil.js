/* eslint-disable no-console */
import Cookies from 'js-cookie';
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/account';
import AuthService from '../../services/Auth';
import Utiles from '../../services/Utiles';
import AxiosQuery from '../../services/AxiosQuery';

const Dashboard = class extends AuthService {
  constructor() {
    super();
    this.userInformation = JSON.parse(Cookies.get('Session'));
    this.el = document.querySelector('#root');
    this.axiosQuery = new AxiosQuery();
    this.run();
  }

  render(flatmates) {
    return `
      ${viewNav(this.currentlyCookie)}
      <div class='sm:flex'>
         ${viewSidebar(flatmates)}
         ${viewContent(this.userInformation)}
      </div>
    `;
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

  async run() {
    const user = await this.getUser();

    if (user) {
      const flatmates = await this.getFlatMates(user);
      this.el.innerHTML = this.render(flatmates);
      this.toggleSidebar = new Utiles();
    }
  }
};

export default Dashboard;
