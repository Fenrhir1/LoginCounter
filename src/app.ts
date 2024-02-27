import { User } from './declarations';

export class LoginApp {
  loggedUser: User['name'] | null = null;
  users: User[] | [] = JSON.parse(localStorage.getItem('users') || '[]');

  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  logIn(name: string) {
    const userExist = this.users.find(user => user.name === name);
    if (!!userExist) {
      userExist.totalAccess++;
    } else {
      const newUser = {
        name,
        latestAccess: new Date(),
        totalAccess: 1,
      };
      this.users = [...this.users, newUser];
    }
  }

  getUsers() {
    const usersFromStorage = localStorage.getItem('users');
    if (usersFromStorage) {
      this.users = JSON.parse(usersFromStorage);
    }
  }
  toggleLoggedUser() {
    localStorage.setItem('loggedUser', !!this.loggedUser ? this.loggedUser : '');
  }
}

export default LoginApp;
