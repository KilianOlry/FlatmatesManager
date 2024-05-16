import FormControll from '../services/FormControl';
import viewNav from '../views/global/nav';
import viewRegister from '../views/register';

const Register = class extends FormControll {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.run();
  }

  renderSkeleton() {
    return `
      ${viewNav()}
      <main>
        ${viewRegister()}
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

export default Register;
