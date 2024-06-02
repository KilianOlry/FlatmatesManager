import viewNav from '../views/global/nav';
import viewBanner from '../views/global/banner';
import viewFooter from '../views/global/footer';
import containerCard from '../views/homepage/container-cards';
import Auth from '../services/Auth';

const Homepage = class extends Auth {
  constructor() {
    super();
    this.el = document.querySelector('#root');
    this.run();
  }

  renderSkeleton() {
    return `
      ${viewNav(this.getCookie())}

      <main>
      
        ${viewBanner()}
        ${containerCard()}

      </main>

      ${viewFooter()}
    `;
  }

  async run() {
    this.el.innerHTML = await this.renderSkeleton();
  }
};

export default Homepage;
