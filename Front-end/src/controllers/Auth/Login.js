/* eslint-disable no-console */
import Cookies from 'js-cookie';
import toastr from 'toastr';
import axios from 'axios';
import FormControll from '../../services/FormControl';

import viewNav from '../../views/global/nav';
import viewLogin from '../../views/auth/login';

const Login = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.formControl = new FormControll();
    this.run();
  }

  renderSkeleton() {
    return `
      ${viewNav()}
      <main>
        ${viewLogin()}
      </main>
    `;
  }

  FormControl() {
    const inputPassword = document.querySelector('.password-input');
    const inputEmail = document.querySelector('.email-input');
    const elMessageStatusEmail = document.querySelector('.message-status-email');
    const elMessageStatusPassword = document.querySelector('.message-status-password');
    const btnSubmit = document.querySelector('.btn-submit');

    this.formControl.visibilityPassword(inputPassword);
    this.formControl.checkEmail(inputEmail, elMessageStatusEmail);
    this.formControl.checkPasswordLenght(inputPassword, elMessageStatusPassword, btnSubmit);
  }

  getDataForm() {
    const formLogin = document.querySelector('.login-form');
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(formLogin);

      const dataForm = {
        email: formData.get('email'),
        password: formData.get('password')
      };

      this.sendData(dataForm);
    });
  }

  sendData(dataForm) {
    axios.post('http://localhost:50/auth/login', dataForm, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((responseApi) => {
        Cookies.set('Session', JSON.stringify(this.buildCookie(responseApi.data)));
        window.location.href = '/';
      })
      .catch((response) => {
        toastr.error(response.response.data);
      });
  }

  buildCookie(data) {
    const userSession = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      token: data.token,
      role: data.role
    };
    return userSession;
  }

  run() {
    this.el.innerHTML = this.renderSkeleton();
    this.FormControl();
    this.getDataForm();
  }
};

export default Login;
