const Error404 = class {
  constructor() {
    this.el = document.getElementById('root');

    this.run();
  }

  render() {
    return `
      <div class="main-error flex justify-center items-center text-center h-screen w-full">
        <div class="fof">
          <h1 class='inline-block text-customGreen-900 text-5xl'>Error 404</h1>
        </div>
      </div>`;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Error404;
