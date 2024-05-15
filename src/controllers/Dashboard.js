import sidebar from '../views/admin/global/sidebar';

const Dashboard = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return `
      ${sidebar()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Dashboard;
