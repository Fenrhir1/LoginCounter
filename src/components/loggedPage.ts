// Nel file loggedPage.ts

import { User } from '../declarations';

export const loggedPage = () => {
  const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  const loggedPage = document.createElement('div');
  loggedPage.innerHTML = `
        <h1>Utenti loggati</h1>
        <ul>
            ${users.map(user => `<li>${user.name} - Accessi totali: ${user.totalAccess} - Data ultimo accesso: ${user.latestAccess ? user.latestAccess.toLocaleString() : 'N/A'}} </li>`).join('')}
        </ul>
        <button id="logout">Logout</button>
    `;

  const logoutButton = loggedPage.querySelector('#logout');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('loggedUser');
      window.location.reload();
    });
  }
  return loggedPage;
};
