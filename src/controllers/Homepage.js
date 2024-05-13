const Homepage = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return `
      <h1>Bonjour à tous</h1>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Homepage;
