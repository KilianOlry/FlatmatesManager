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
      ${viewNav(this.ifAuth)}

      <main>
      
        ${viewBanner()}
        ${containerCard()}

      </main>

      ${viewFooter()}
    `;
  }

  run() {
    this.ifLog = new Auth(Cookies.get('Session'));
    this.ifAuth = (this.ifLog.ifAuth);
    this.el.innerHTML = this.renderSkeleton();
  }
};

export default Homepage;
