import Cookies from 'js-cookie';
import toastr from 'toastr';
import axios from 'axios';
import FormControll from '../services/FormControl';

import viewNav from '../views/global/nav';
import viewLogin from '../views/login';

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
    this.formControl.checkEmail();
    this.formControl.checkPassword();
    this.formControl.visibilityPassword();
  }

  sendData() {
    const formLogin = document.querySelector('.login-form');
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(formLogin);

      const data = {
        email: formData.get('email'),
        password: formData.get('password')
      };

      this.axiosQuery(data);
    });
  }

  axiosQuery(data) {
    axios.post('http://localhost:50/user/auth', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        Cookies.set('Session', (response.data));
        window.location.href = '/';
      })
      .catch(() => {
        toastr.error("L'adresse mail et ou le mode de passe est incorrect");
      });
  }

  run() {
    this.el.innerHTML = this.renderSkeleton();
    this.FormControl();
    this.sendData();
  }
};

export default Login;
