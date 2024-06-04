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
      ${viewNav(this.currentlyCookie)}

      <main>
      
        ${viewBanner()}
        ${containerCard(this.ifAdmin())}

      </main>

      ${viewFooter()}
    `;
  }

  async run() {
    this.el.innerHTML = await this.renderSkeleton();
  }
};

export default Homepage;
