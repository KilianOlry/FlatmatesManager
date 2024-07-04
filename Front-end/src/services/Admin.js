/* eslint-disable no-console */
import ServiceAuth from './Auth';
import ServiceAxiosQuery from './AxiosQuery';

const AdminService = class extends ServiceAuth {
  constructor() {
    super();
    this.serviceAxiosQuery = new ServiceAxiosQuery();
    this.run();
  }

  async getUser() {
    const user = await this.serviceAxiosQuery.Post('http://localhost:50/user/getinformations', (await this.user).userToken);
    return user;
  }

  async getFlatMates() {
    const flatmates = await this.serviceAxiosQuery.Get(`http://localhost:50/home/${(await this.user).userToken}`);
    return flatmates;
  }

  async getTasks() {
    const tasks = await this.serviceAxiosQuery.Get(`http://localhost:50/task/${(await this.user).userToken}`);
    return tasks;
  }

  async getExpenses() {
    const expenses = await this.serviceAxiosQuery.Get(`http://localhost:50/expense/${(await this.user).userToken}`);
    return expenses;
  }

  async getMessages() {
    const messages = await this.serviceAxiosQuery.Get(`http://localhost:50/message/${(await this.user).userToken}`);
    return messages;
  }

  async getCategoriesTask() {
    const categoriesTask = await this.serviceAxiosQuery.Get('http://localhost:50/categories-tasks/');
    return categoriesTask;
  }

  async getCategoriesExpenses() {
    const categories = await this.serviceAxiosQuery.Get('http://localhost:50/categories-expenses/');
    return categories;
  }

  async run() {
    this.currentUser = await this.getUser();
  }
};

export default AdminService;
