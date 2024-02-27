/** @format */

import { LoginApp } from './app';
import { loggedPage } from './components/loggedPage';
import { loginPage } from './components/loginPage';
import './css/general.css';

window.onload = () => {
  const loggedUser = localStorage.getItem('loggedUser');
  const root = document.getElementById('root');

  if (!loggedUser) {
    if (root) {
      root.appendChild(loginPage());
    }
  } else {
    root?.appendChild(loggedPage());
  }
};

export const app = new LoginApp();

// @ts-ignore
window.app = app;
