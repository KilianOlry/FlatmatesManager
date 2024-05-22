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

  run() {
    this.el.innerHTML = this.renderSkeleton();
    this.FormControl();
  }
};

export default Login;
