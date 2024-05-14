import viewNav from '../views/global/nav';
import viewRegister from '../views/register';

const Register = class {
  constructor() {
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
  }
};

export default Register;
