import favicon from '../../assets/icons/favicon.svg';

export default (stmtUser) => `
<nav class="border-gray-200 dark:bg-gray-900 border-solid border-gray-200 border-b">
  <div class="container flex flex-wrap items-center justify-between mx-auto px-4 md:px-12">
    <a href="/" class="">
      <img src='${favicon}' alt='logo de la colocation'>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="toggle-nav inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg xmlns="http://www.w3.org/2000/svg" class='w-8 h-8' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-right"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto navbar-default" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/" class="block text-lg py-2 px-3 text-gray-500 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Accueil</a>
        </li>
        ${stmtUser ? `

        ${stmtUser.home_id ? `
        <li>
          <a href="/dashboard" class="block text-lg py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tableau de bord</a>
        </li>
        ` : ''}
  
        <li>
          <a href="/logout" class="block text-lg py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Déconnexion</a>
        </li>
        ` : `
        <li>
          <a href="/login" class="block text-lg py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Connexion</a>
        </li>
        <li>
          <a href="/register" class="block text-lg py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Créer son compte</a>
        </li>
        `}
      </ul>
    </div>
  </div>
</nav>
`;
