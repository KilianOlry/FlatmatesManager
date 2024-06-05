import toastr from 'toastr';
import axios from 'axios';
import Cookies from 'js-cookie';
import viewNav from '../views/global/nav';
import viewBanner from '../views/global/banner';
import viewFooter from '../views/global/footer';
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

  getDataForm() {
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

      this.sendData(dataForm);
    });
  }

  sendData(dataForm) {
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

  async run() {
    this.el.innerHTML = await this.renderSkeleton();
    this.getDataForm();
  }
};

export default Homepage;
