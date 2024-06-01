import Cookies from 'js-cookie';
import viewNav from '../views/global/nav';
import viewBanner from '../views/global/banner';
import viewFooter from '../views/global/footer';
import containerCard from '../views/homepage/container-cards';
import Auth from '../services/Auth';

const Homepage = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  renderSkeleton() {
    return `
      ${viewNav(this.userStmt)}

      <main>
      
        ${viewBanner()}
        ${containerCard()}

      </main>

      ${viewFooter()}
    `;
  }

  logout() {
    this.formLogout = document.querySelector('.form-logout');

    this.formLogout.addEventListener('click', () => {
      Cookies.remove('Session');
    });
  }

  run() {
    this.AuthService = new Auth();
    this.userStmt = this.AuthService.checkStmtUser();
    this.el.innerHTML = this.renderSkeleton();
    this.logout();
  }
};

export default Homepage;
