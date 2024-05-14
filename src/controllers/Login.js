import viewNav from '../views/global/nav';
import viewFooter from '../views/global/footer';

const Login = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  checkEmail() {
    const inputEmail = document.querySelector('.email-input');
    const patternEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const messageStatus = document.querySelector('.message-status');

    inputEmail.addEventListener('keyup', () => {
      if (inputEmail.value.match(patternEmail)) {
        messageStatus.innerHTML = `
        <div class="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Ok !</span> Adresse email valide
        </div>
      </div>
        `;
      } else {
        messageStatus.innerHTML = `
        <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Erreur !</span> Ceci n'est pas une adresse mail valide
        </div>
      </div>
        `;
      }
    });
  }

  renderForm() {
    return `
    <div class="container-form h-screen overflow-hidden flex items-center justify-center">
    <div class="lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
      <div class="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
        </svg>
      </div>
      <form class="p-12 md:p-24">
        <div class="flex items-center text-lg mb-6 md:mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute ml-3" width="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg>
          <input type="text" id="username" class="email-input bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Email" />
        </div>
        <div class='message-status'></div>
        <div class="flex items-center text-lg mb-6 md:mb-8">
          <svg class="absolute ml-3" viewBox="0 0 24 24" width="24">
            <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
          </svg>
          <input type="password" id="password" class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Mot de passe" />
        </div>
        <button class="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">Se connecter</button>
      </form>
    </div>
   </div>
    `;
  }

  renderSkeleton() {
    return `
      ${viewNav()}
      <main>
        ${this.renderForm()}
      </main>
      ${viewFooter()}
    `;
  }

  run() {
    this.el.innerHTML = this.renderSkeleton();
    this.checkEmail();
  }
};

export default Login;
