import Cookies from 'js-cookie';
import ServiceAxiosQuery from './AxiosQuery';

class AuthService {
  constructor() {
    this.axiosQuery = new ServiceAxiosQuery();
    this.currentlyCookie = null;
    this.init();
  }

  async init() {
    this.currentlyCookie = await this.getCookie();
    return this.currentlyCookie;
  }

  async getCookie() {
    const token = Cookies.get('Session');
    if (token) {
      try {
        const isAdmin = await this.ifAdmin(token);
        return isAdmin;
      } catch (error) {
        console.error('Error checking admin status:', error);
        return false;
      }
    }
    return false;
  }

  async ifAdmin(token) {
    try {
      const flatmate = await this.axiosQuery.Post('http://localhost:50/user/getbytoken', token);
      return flatmate.home_id != null;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return false;
    }
  }
}

export default AuthService;
