const Utiles = class {
  constructor() {
    this.toggleBtn();
    this.closeSidebar();
  }

  toggleBtn() {
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
};

export default Utiles;
