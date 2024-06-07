import Cookies from 'js-cookie';
import axios from 'axios';
import viewNav from '../../views/global/nav';
import viewSidebar from '../../views/admin/global/sidebar';
import viewContent from '../../views/admin/dashboard/dashboard';

const Dashboard = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return `
      ${viewNav()}
      <div class='flex'>
         ${viewSidebar()}
         ${viewContent()}
      </div>
    `;
  }

  getUser() {
    const data = JSON.parse(Cookies.get('Session'));
    axios.post('http://localhost:50/user/:get', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        this.getMembers(response.data);
      })
      .catch(() => {
        console.log('erreur');
      });
  }

  getMembers(data) {
    axios.post('http://localhost:50/home/get', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log((response.data));
      })
      .catch(() => {
        console.log('erreur');
      });
  }

  async run() {
    this.getUser();
    this.el.innerHTML = await this.render();
  }
};

export default Dashboard;
