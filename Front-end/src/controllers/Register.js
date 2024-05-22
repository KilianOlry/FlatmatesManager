import axios from 'axios';
import FormControl from '../services/FormControl';

import viewNav from '../views/global/nav';
import viewRegister from '../views/register';

const Register = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.formControl = new FormControl();
    this.run();
  }

  sendData() {
    const formRegister = document.querySelector('#form-register');
    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(formRegister);
      const data = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        password: formData.get('password')
      };

      this.axiosQuery(data);
    });
  }

  axiosQuery(data) {
    axios.post('http://localhost:50/user/add', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log('Réponse de l\'API:', response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi des données:', error);
      });
  }

  renderSkeleton() {
    return `
      ${viewNav()}
      <main>
        ${viewRegister()}
      </main>
    `;
  }

  FormControl() {
    this.formControl.checkEmail();
    this.formControl.checkPassword();
    this.formControl.matchPassword();
    this.formControl.visibilityPassword();
  }

  run() {
    this.el.innerHTML = this.renderSkeleton();
    this.sendData();
    this.FormControl();
  }
};

export default Register;
