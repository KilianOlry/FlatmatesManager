/* eslint-disable no-console */
import toastr from 'toastr';
import axios from 'axios';
import Cookies from 'js-cookie';
import viewNav from '../views/global/nav';
import viewBanner from '../views/homepage/banner';
import viewFooter from '../views/homepage/footer';
import containerCard from '../views/homepage/container-cards';
import Auth from '../services/Auth';

const Homepage = class extends Auth {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.run();
  }

  renderSkeleton() {
    return `
      ${viewNav(this.currentlyCookie)}

      <main>
    
        ${viewBanner()}
        ${containerCard(this.ifAdmin())}

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
    axios.post('http://localhost:50/home/create', dataForm, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        toastr.success('colocation crée');
      })
      .catch(() => {
        toastr.error('erreur lors de la création de la colocation');
      });
  }

  sendDataFormJoin(dataForm) {
    axios.post('http://localhost:50/home/join', dataForm, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        toastr.success('Bienvenue dans la colocation. Vous serez dirigé dans 5secs dans votre Dashboard');
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 5000);
      })
      .catch(() => {
        toastr.error('Erreur token incorrect');
      });
  }

  async run() {
    this.el.innerHTML = await this.renderSkeleton();
    this.getDataFormCreate();
    this.getDataFormJoin();
  }
};

export default Homepage;
