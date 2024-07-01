/* eslint-disable no-console */
import Cookies from 'js-cookie';
import FormControll from '../../services/FormControl';

import viewNav from '../../views/global/nav';
import viewLogin from '../../views/auth/login';
import AxiosQuery from '../../services/AxiosQuery';

const Login = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.formControl = new FormControll();
    this.axiosQuery = new AxiosQuery();
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

      this.sendDatas(dataForm);
    });
  }

  async sendDatas(dataForm) {
    const logUser = await this.axiosQuery.Post('http://localhost:50/auth/login', dataForm);
    if (!logUser.data) {
      Cookies.set('Session', JSON.stringify(this.buildCookie(logUser)));
      window.location.href = '/';
    }
  }

  buildCookie(data) {
    const userSession = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      token: data.token,
      role: data.role,
      home_id: data.home_id
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
