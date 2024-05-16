import FormControll from '../services/FormControl';

import viewNav from '../views/global/nav';
import viewLogin from '../views/login';

const Login = class extends FormControll {
  constructor() {
    super();
    this.el = document.querySelector('#root');
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

  run() {
    this.el.innerHTML = this.renderSkeleton();
    this.checkEmail();
    this.checkPassword();
    this.visibilityPassword();
  }
};

export default Login;
