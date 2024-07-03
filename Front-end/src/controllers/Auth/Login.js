/* eslint-disable no-console */
import Cookies from 'js-cookie';

import viewNav from '../../views/global/nav';
import viewLogin from '../../views/auth/login';

import ServiceFormControll from '../../services/FormControl';
import ServiceAuth from '../../services/Auth';
import ServiceAxiosQuery from '../../services/AxiosQuery';

const Login = class extends ServiceAuth {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.formControl = new ServiceFormControll();
    this.axiosQuery = new ServiceAxiosQuery();
    this.run();
  }

  renderSkeleton() {
    return `
      ${viewNav(this.init())}
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

      this.sendDatas(dataForm);
    });
  }

  async sendDatas(dataForm) {
    const logUser = await this.axiosQuery.Post('http://localhost:50/auth/login', dataForm);
    if (logUser.token) {
      Cookies.set('Session', logUser.token);
      window.location.href = '/';
    }
  }

  run() {
    this.el.innerHTML = this.renderSkeleton();
    this.FormControl();
    this.getDataForm();
  }
};

export default Login;
