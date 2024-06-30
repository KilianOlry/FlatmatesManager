/* eslint-disable no-console */
import AuthService from './Auth';
import AxiosQuery from './AxiosQuery';

const AdminService = class {
  constructor() {
    this.user = new AuthService();
    this.axiosQuery = new AxiosQuery();
    this.run();
  }

  async getUser() {
    const user = await this.axiosQuery.Post('http://localhost:50/user/:get', this.user.currentlyCookie);
    return user;
  }

  async getFlatMates() {
    const flatmates = await this.axiosQuery.Get(`http://localhost:50/home/${this.user.currentlyCookie.home_id}`);
    return flatmates;
  }

  async getTasks() {
    const tasks = await this.axiosQuery.Get(`http://localhost:50/task/${this.currentUser.id}`);
    return tasks;
  }

  async getExpenses() {
    const expenses = await this.axiosQuery.Get(`http://localhost:50/expense/${this.currentUser.id}`);
    return expenses;
  }

  async getMessages() {
    const messages = await this.axiosQuery.Get(`http://localhost:50/message/${this.currentUser.home_id}`);
    return messages;
  }

  async getCategoriesTask() {
    const categoriesTask = await this.axiosQuery.Get('http://localhost:50/categories-tasks/');
    return categoriesTask;
  }

  async getCategoriesExpenses() {
    const categories = await this.axiosQuery.Get('http://localhost:50/categories-expenses/');
    return categories;
  }

  async run() {
    this.currentUser = await this.getUser();
  }
};

export default AdminService;
