import viewNav from '../views/global/nav';

const Login = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  renderSkeleton() {
    return `
      ${viewNav()}
    `;
  }

  run() {
    this.el.innerHTML = this.renderSkeleton();
  }
};

export default Login;
