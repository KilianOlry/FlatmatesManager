// import toastr from 'toastr';
import Cookies from 'js-cookie';
import axios from 'axios';
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/expenses/expenses';

const DashboardExpenses = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  async render(flatmates) {
    return `
      ${viewNav()}
      <div class='sm:flex container_dashboard'>
         ${viewSidebar()}
         ${viewContent(await this.getCategoriesExpenses(), flatmates)}
      </div>
    `;
  }

  async getUser() {
    try {
      const data = JSON.parse(Cookies.get('Session'));
      const response = await axios.post('http://localhost:50/user/:get', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  }

  async getCategoriesExpenses() {
    const apiUrl = 'http://localhost:50/category-expenses/getAll';
    try {
      const response = await axios.get(apiUrl);
      const datas = response.data;
      return datas;
    } catch (error) {
      return error;
    }
  }

  async getFlatMates(user) {
    try {
      const response = await axios.post('http://localhost:50/home/get', user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching members:', error);
      return null;
    }
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
    const user = await this.getUser();
    if (user) {
      const flatmates = await this.getFlatMates(user);
      this.el.innerHTML = await this.render(flatmates);
      this.toggleModal();
      this.closeToggleModal();
    }
  }
};

export default DashboardExpenses;
