import viewNav from '../views/global/nav';
import viewBanner from '../views/global/banner';
import viewFooter from '../views/global/footer';
import card from '../views/homepage/card';

const Homepage = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  renderSkeleton() {
    return `
      ${viewNav()}

      <main>
      
        ${viewBanner()}
        <h1 class="my-10 text-2xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Nous Vous</span> Proposons </h1>
        <div class='flex flex-wrap container mx-auto gap-16 justify-center my-12'>
          ${card('Rejoindre une colocation')}
          ${card('Rejoindre une colocation')}
        </div>

      </main>

        ${viewFooter()}
    `;
  }

  run() {
    this.el.innerHTML = this.renderSkeleton();
  }
};

export default Homepage;
