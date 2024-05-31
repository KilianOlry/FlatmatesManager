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

  getDataForm() {
    const formLogin = document.querySelector('.login-form');
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(formLogin);

      const data = {
        email: formData.get('email'),
        password: formData.get('password')
      };

      this.sendData(data);
    });
  }

  sendData(data) {
    axios.post('http://localhost:50/user/auth', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((responseApi) => {
        Cookies.set('Session', JSON.stringify(this.buildCookie(responseApi)));
        window.location.href = '/';
      })
      .catch(() => {
        toastr.error("L'adresse mail et ou le mode de passe est incorrect");
      });
  }

  buildCookie(responseApi) {
    const userSession = {
      firstname: responseApi.data.firstname,
      lastname: responseApi.data.lastname,
      email: responseApi.data.email,
      token: responseApi.data.token
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
