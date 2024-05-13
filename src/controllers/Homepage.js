import viewNav from '../views/global/nav';

const Homepage = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  renderSkeleton() {
    return `
      ${viewNav()}

      <main>

      </main>

      <footer>
      
      </footer>
    `;
  }

  run() {
    this.el.innerHTML = this.renderSkeleton();
  }
};

export default Homepage;
