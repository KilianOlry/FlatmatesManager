import viewNav from '../views/global/nav';
import viewSidebar from '../views/admin/global/sidebar';

const Dashboard = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return `
      ${viewNav()}
      <div>
         ${viewSidebar()}
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Dashboard;
