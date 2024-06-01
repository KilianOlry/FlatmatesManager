import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/account';

const Dashboard = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return `
      ${viewNav()}
      <div class='sm:flex'>
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