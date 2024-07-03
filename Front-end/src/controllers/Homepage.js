/* eslint-disable no-console */

import viewNav from '../views/global/nav';
import viewFirstSection from '../views/homepage/sections/sections';
import viewFooter from '../views/homepage/footer';
import viewContainerCard from '../views/homepage/container-cards';

import ServiceAuth from '../services/Auth';
import ServiceAxiosQuery from '../services/AxiosQuery';

const Homepage = class extends ServiceAuth {
  constructor() {
    super();
    this.axiosQuery = new ServiceAxiosQuery();
    this.el = document.querySelector('#root');
    this.run();
  }

  async renderSkeleton() {
    return `

      ${viewNav(await this.user)}

      <main>

        ${viewFirstSection()}
        ${(await this.user).userToken ? `${viewContainerCard((await this.user).ifFlatmate.isAdmin)}` : ''}

      </main>

      ${viewFooter()}
    `;
  }

  getDataFormCreate() {
    const formCreateHome = document.querySelector('.form-create-home');

    formCreateHome.addEventListener('submit', async (e) => {
      e.preventDefault();
      const token = (await this.user).userToken;
      const formData = new FormData(formCreateHome);

      const dataForm = {
        name: formData.get('name'),
        adress: formData.get('adress'),
        userToken: token
      };

      this.sendDataFormCreate(dataForm);
    });
  }

  getDataFormJoin() {
    const formJoinHome = document.querySelector('.form-join-home');

    formJoinHome.addEventListener('submit', async (e) => {
      e.preventDefault();
      const { userToken } = await this.user;
      const formData = new FormData(formJoinHome);

      const dataForm = {
        homeToken: formData.get('token'),
        userToken
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
