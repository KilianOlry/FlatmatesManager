import Cookies from 'js-cookie';
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/account';

const Dashboard = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.userInformation = JSON.parse(Cookies.get('Session'));
    this.run();
  }

  render() {
    return `
      ${viewNav()}
      <div class='sm:flex'>
         ${viewSidebar()}
         ${viewContent(this.userInformation)}
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Dashboard;
