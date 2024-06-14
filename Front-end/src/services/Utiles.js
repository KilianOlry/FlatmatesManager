const Utiles = class {
  constructor() {
    this.openSidebar();
    this.closeSidebar();
    this.openNavBar();
  }

  openSidebar() {
    const togglebtn = document.querySelector('.sidebar-btn ');
    togglebtn.addEventListener('click', (e) => {
      e.preventDefault();
      const sidebar = document.querySelector('.sidebar-multi-level-sidebar');
      sidebar.classList.add('translate-x-0', 'h-screen');
    });
  }

  closeSidebar() {
    const closeBtn = document.querySelector('.close-sidebar');
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const sidebar = document.querySelector('.sidebar-multi-level-sidebar');
      sidebar.classList.remove('translate-x-0', 'h-screen');
    });
  }

  openNavBar() {
    const toggleBtn = document.querySelector('.toggle-nav');
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const nav = document.querySelector('.navbar-default');
      nav.classList.toggle('hidden');
    });
  }
};

export default Utiles;
