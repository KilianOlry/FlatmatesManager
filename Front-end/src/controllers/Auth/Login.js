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
    this.formControl.checkEmail();
    this.formControl.checkPassword();
    this.formControl.visibilityPassword();
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
      .catch(() => {
        toastr.error("L'adresse mail et ou le mode de passe est incorrect");
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
