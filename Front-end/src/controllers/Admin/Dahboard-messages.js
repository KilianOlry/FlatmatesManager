import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/messages/dashboard';

const DashboardMessage = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  async render() {
    return `
      ${viewNav()}
      <div class='sm:flex container_dashboard'>
         ${viewSidebar()}
         ${viewContent()}
      </div>
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default DashboardMessage;
