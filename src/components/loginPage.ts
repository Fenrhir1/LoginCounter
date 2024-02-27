// Nel file loginPage.ts

export const loginPage = () => {
  const loginPage = document.createElement('div');
  loginPage.innerHTML = `
              <h1>Login</h1>
              <input type="text" id="input-box" placeholder="Inserisci il tuo nome">
              <button id="login">Accedi</button>
      `;

  const loginButton = loginPage.querySelector('#login');
  if (loginButton) {
    loginButton.addEventListener('click', () => {
      const usernameInput = loginPage.querySelector('#input-box') as HTMLInputElement;
      if (usernameInput) {
        const username = usernameInput.value;
        if (username) {
          const usersFromStorage = JSON.parse(localStorage.getItem('users') || '[]');
          const existingUserIndex = usersFromStorage.findIndex((user: { name: string }) => user.name === username);
          const currentDate = new Date();
          if (existingUserIndex !== -1) {
            const existingUser = usersFromStorage[existingUserIndex];
            existingUser.totalAccess++;
            existingUser.latestAccess = currentDate;
          } else {
            usersFromStorage.push({ name: username, totalAccess: 1, latestAccess: currentDate });
          }
          localStorage.setItem('users', JSON.stringify(usersFromStorage));
          localStorage.setItem('loggedUser', username);
          window.location.reload();
        }
      }
    });
  }
  return loginPage;
};
