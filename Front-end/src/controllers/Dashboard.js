import viewNav from '../views/global/nav';
import viewSidebar from '../views/admin/global/sidebar';
import viewContent from '../views/admin/dashboard/dashboard';

const Dashboard = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return `
      ${viewNav()}
      <div class='flex'>
         ${viewSidebar()}
         ${viewContent()}
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Dashboard;
