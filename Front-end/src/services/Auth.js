import Cookies from 'js-cookie';
import ServiceAxiosQuery from './AxiosQuery';

class AuthService {
  constructor() {
    this.axiosQuery = new ServiceAxiosQuery();
    this.user = this.init();
  }

  async init() {
    const token = this.getCookie();
    const ifFlatmate = await this.checkUser(token);
    return { userToken: token, ifFlatmate };
  }

  getCookie() {
    const token = Cookies.get('Session');
    return token;
  }

  async checkUser(token) {
    try {
      const flatmate = await this.axiosQuery.Post('http://localhost:50/user/getbytoken', token);
      return {
        homeJoin: flatmate.home_id || false,
        isAdmin: flatmate.role === 'ADMIN' || false
      };
    } catch {
      return false;
    }
  }
}

export default AuthService;
