/* eslint-disable no-console */
import toastr from 'toastr';
import axios from 'axios';
import FormControl from '../../services/FormControl';

import viewNav from '../../views/global/nav';
import viewRegister from '../../views/auth/register';

const Register = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.formControl = new FormControl();
    this.run();
  }

  getDataForm() {
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

      this.sendData(data);
    });
  }

  sendData(data) {
    axios.post('http://localhost:50/auth/register', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        toastr.success(response.data);
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000);
      })
      .catch((response) => {
        console.log();
        toastr.error(response.response.data);
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
    this.FormControl();
    this.getDataForm();
  }
};

export default Register;
