import member from './members/member';
import iconProfil from '../../../assets/icons/sidebar/profil.svg';
import iconCalendar from '../../../assets/icons/sidebar/calendar.svg';
import iconTalk from '../../../assets/icons/sidebar/talk.svg';
import iconMoney from '../../../assets/icons/sidebar/money.svg';
import iconTask from '../../../assets/icons/sidebar/task.svg';
import iconDashboard from '../../../assets/icons/sidebar/dashboard.svg';

export default (flatmates) => (`
<button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
  <span class="sr-only">Open sidebar</span>
  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
  </svg>
</button>

<aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 sm:relative z-40 w-64 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <div class="sidebar px-3 py-4 overflow-y-auto bg-white md:rounded-2xl shadow-sm dark:bg-gray-800">
    <ul class="space-y-2 font-medium">

      <li>
        <a href="/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <img src='${iconDashboard}' class='flex-shrink-0 size-8 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'>
          <span class="ms-3">Tableau de bord</span>
        </a>
      </li>

      <li>
        <a href="/dashboard-tasks" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <img src='${iconTask}' class='flex-shrink-0 size-8 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'>
          <span class="ms-3">Tâches</span>
        </a>
      </li>

      <li>
        <a href="/dashboard-expenses" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <img src='${iconMoney}' class='flex-shrink-0 size-8 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'>
          <span class="ms-3">Dépenses</span>
        </a>
      </li>

      <li>
        <a href="/dashboard-messages" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <img src='${iconTalk}' class='flex-shrink-0 size-8 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'>
          <span class="flex-1 ms-3 whitespace-nowrap">Messages</span>
        </a>
      </li>

      <li>
        <a href="/dashboard-calendar" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <img src='${iconCalendar}' class='flex-shrink-0 size-8 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'>
          <span class="flex-1 ms-3 whitespace-nowrap">Calendrier</span>
        </a>
      </li>

      <li>
        <a href="/dashboard-myprofil" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <img src='${iconProfil}' class='flex-shrink-0 size-8 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'>
          <span class="flex-1 ms-3 whitespace-nowrap">Mon profil</span>
        </a>
      </li>

      <section class='absolute bottom-0 w-full p-3'>
        ${flatmates.map((item) => member(item)).join('')}
      </section>

    </ul>
  </div>
</aside>
`);
