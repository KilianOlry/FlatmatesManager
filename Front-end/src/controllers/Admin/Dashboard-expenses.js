/* eslint-disable no-console */
import toastr from 'toastr';
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
      <div class='sm:flex container_dashboard p-3 md:pl-6 gap-4'>
         ${viewSidebar(flatmates)}
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

  getDataForm() {
    const formCreateExpense = document.querySelector('.create-expense');
    formCreateExpense.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(formCreateExpense);
      const cookie = JSON.parse(Cookies.get('Session'));
      const { token } = cookie;
      const data = {
        tokenUser: token,
        date: formData.get('date'),
        flatmates: formData.get('flatmates'),
        category: formData.get('category'),
        priority: formData.get('priority'),
        description: formData.get('description'),
        price: formData.get('price')
      };
      this.sendData(data);
    });
  }

  sendData(data) {
    axios.post('http://localhost:50/expense/add', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response);
        // toastr.success('Félicitation Votre compte est créer !! Veuillez vous connecter');
      })
      .catch(() => {
        toastr.error('Erreur lors de la création de votre compte');
      });
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
      this.getDataForm();
      this.toggleModal();
      this.closeToggleModal();
    }
  }
};

export default DashboardExpenses;
