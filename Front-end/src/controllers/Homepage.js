import viewNav from '../views/global/nav';
import viewBanner from '../views/global/banner';
import viewFooter from '../views/global/footer';
import containerCard from '../views/homepage/container-cards';
import Auth from '../services/Auth';

const Homepage = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.userStmt = new Auth();
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
    this.el.innerHTML = this.renderSkeleton();
  }
};

export default Homepage;
