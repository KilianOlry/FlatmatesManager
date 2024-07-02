/* eslint-disable max-len */
import favicon from '../../assets/icons/favicon.svg';

export default (stmtUser) => `
<nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-sm">
  <div class="container flex flex-wrap items-center justify-between mx-auto px-4 md:px-12">
    <a href="/" class="flex items-center space-x-3">
      <img src="${favicon}" alt="logo site internet" />
    </a>
    <div class="flex">
      <button data-collapse-toggle="navbar-search" type="button" class="toggle-nav inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>
    <div class="navbar-default items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <ul class='sm:flex sm:gap-6'>
        <li>
          <a href="/" class="font-medium capitalize block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-customBlue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">accueil</a>
        </li>
        <li>
          <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="capitalize font-medium flex items-center justify-between w-full py-2 px-3 text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-customBlue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">espace personnel
            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
             ${stmtUser ? `
                <li>
                  <a href="/dashboard" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tableau de bord</a>
                </li>
                <div class="py-1">
                  <a href="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Déconnexion</a>
                </div>
                ` : `
                <li>
                  <a href="/login" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Connexion</a>
                </li>
                <li>
                  <a href="/register" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Inscription</a>
                </li>
                `} 
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;
