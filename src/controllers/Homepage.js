import viewNav from '../views/global/nav';
import viewBanner from '../views/global/banner';

const Homepage = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  renderCard(title) {
    return `
    <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <div class="relative">
        <img class="w-full rounded-xl" src="https://img.freepik.com/vecteurs-libre/illustration-concept-petite-maison_114360-9087.jpg?t=st=1715605297~exp=1715608897~hmac=63558cb64e06406d159de9d88340f595dc16539276563cd633642784c4f0322c&w=1060" alt="Colors" />
      </div>
      <div class="my-4">
        <button class="mt-4 text-xl capitalize w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">${title}</button>
      </div>
  </div>
    `;
  }

  renderSkeleton() {
    return `
      ${viewNav()}

      <main>
        ${viewBanner()}
        <h1 class="my-10 text-2xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Nous Vous</span> Proposons </h1>
        <div class='flex flex-wrap container mx-auto gap-12 justify-center my-12'>
          ${this.renderCard('rejoindre une colocation')}
          ${this.renderCard('créer une colocation')}
        </div>

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
