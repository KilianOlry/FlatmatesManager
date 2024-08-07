/* eslint-disable no-console */
import viewNav from '../../views/global/nav';
import viewRegister from '../../views/auth/register';

import ServiceFormControll from '../../services/FormControl';
import ServiceAxiosQuery from '../../services/AxiosQuery';

const Register = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.formControl = new ServiceFormControll();
    this.axiosQuery = new ServiceAxiosQuery();
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

  async sendData(data) {
    this.axiosQuery.Post('http://localhost:50/auth/register', data);
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
    const inputPassword = document.querySelector('.password-input');
    const inputEmail = document.querySelector('.email-input');
    const inputVerifyPassword = document.querySelector('.verify-password');
    const elMessageStatusEmail = document.querySelector('.message-status-email');
    const elMessageStatusPassword = document.querySelector('.message-status-password');
    const elMessageStatusVerifypassword = document.querySelector('.message-status-match-password');
    const btnSubmit = document.querySelector('.btn-submit');

    this.formControl.matchPassword(
      inputPassword,
      inputVerifyPassword,
      elMessageStatusVerifypassword,
      btnSubmit
    );

    this.formControl.visibilityPassword(inputPassword);
    this.formControl.checkEmail(inputEmail, elMessageStatusEmail);
    this.formControl.checkPasswordLenght(inputPassword, elMessageStatusPassword, btnSubmit);
  }

  run() {
    this.el.innerHTML = this.renderSkeleton();
    this.FormControl();
    this.getDataForm();
  }
};

export default Register;
