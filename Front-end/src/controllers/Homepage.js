/* eslint-disable no-console */
import Cookies from 'js-cookie';
import viewNav from '../views/global/nav';
import viewFirstSection from '../views/homepage/first-section';
import viewSecondSection from '../views/homepage/second-section';
import viewFooter from '../views/homepage/footer';
import containerCard from '../views/homepage/container-cards';
import Auth from '../services/Auth';
import AxiosQuery from '../services/AxiosQuery';

const Homepage = class extends Auth {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.axiosQuery = new AxiosQuery();
    this.run();
  }

  renderSkeleton() {
    return `

      ${viewNav(this.currentlyCookie)}
      <main>

        ${viewFirstSection()}
        ${viewSecondSection()}
        ${this.currentlyCookie ? `${containerCard(this.ifAdmin())}` : ''}

      </main>

      ${viewFooter()}
    `;
  }

  getDataFormCreate() {
    const formCreateHome = document.querySelector('.form-create-home');

    formCreateHome.addEventListener('submit', (e) => {
      e.preventDefault();
      const currentlyUser = JSON.parse(Cookies.get('Session'));
      const formData = new FormData(formCreateHome);

      const dataForm = {
        name: formData.get('name'),
        adress: formData.get('adress'),
        userEmail: currentlyUser.email
      };

      this.sendDataFormCreate(dataForm);
    });
  }

  getDataFormJoin() {
    const formJoinHome = document.querySelector('.form-join-home');

    formJoinHome.addEventListener('submit', (e) => {
      e.preventDefault();
      const currentlyUser = JSON.parse(Cookies.get('Session'));
      const formData = new FormData(formJoinHome);

      const dataForm = {
        token: formData.get('token'),
        userEmail: currentlyUser.email
      };

      this.sendDataFormJoin(dataForm);
    });
  }

  sendDataFormCreate(dataForm) {
    this.axiosQuery.Post('http://localhost:50/home/create', dataForm);
  }

  sendDataFormJoin(dataForm) {
    this.axiosQuery.Put('http://localhost:50/user/update', dataForm);
  }

  async run() {
    this.el.innerHTML = await this.renderSkeleton();
    this.getDataFormCreate();
    this.getDataFormJoin();
  }
};

export default Homepage;
