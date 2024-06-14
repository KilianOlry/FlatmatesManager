import member from './members/member';
import iconProfil from '../../../assets/icons/sidebar/profil.svg';
import iconCalendar from '../../../assets/icons/sidebar/calendar.svg';
import iconTalk from '../../../assets/icons/sidebar/talk.svg';
import iconMoney from '../../../assets/icons/sidebar/money.svg';
import iconTask from '../../../assets/icons/sidebar/task.svg';
import iconDashboard from '../../../assets/icons/sidebar/dashboard.svg';

export default (flatmates) => (`
<button class="sidebar-btn w-8 items-center text-sm text-gray-500 rounded-lg xl:hidden focus:outline-none focus:ring-2 focus:ring-gray-200">
  <svg xmlns="http://www.w3.org/2000/svg" class='w-6 h-6' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-close"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg>
</button>

<aside class="sidebar-multi-level-sidebar fixed top-0 left-0 xl:relative z-40 w-64 transition-transform -translate-x-full xl:translate-x-0">
  <div class="sidebar px-3 py-4 relative md:rounded-2xl shadow-sm dark:bg-gray-800">
    <button class='absolute close-sidebar -right-0 green-100 p-2 text-gray-500 rounded-lg shadow-sm xl:hidden'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-left-close"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/></svg>
    </button>
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
