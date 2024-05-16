import iconProfil from '../../../assets/icons/sidebar/profil.svg';
import iconCalendar from '../../../assets/icons/sidebar/calendar.svg';
import iconTalk from '../../../assets/icons/sidebar/talk.svg';
import iconMoney from '../../../assets/icons/sidebar/money.svg';
import iconTask from '../../../assets/icons/sidebar/task.svg';
import iconDashboard from '../../../assets/icons/sidebar/dashboard.svg';

export default () => (`
<button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
<span class="sr-only">Open sidebar</span>
<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
</svg>
</button>

<aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 sm:relative z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
    <ul class="space-y-2 font-medium">
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <img src='${iconDashboard}' class='flex-shrink-0 size-8 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'>
              <span class="ms-3">Tableau de bord</span>
          </a>
        </li>
        <li>
          <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

          <img src='${iconTask}' class='flex-shrink-0 size-8 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'>
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Tâches</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
          </button>
          <ul id="dropdown-example" class="hidden py-2 space-y-2">
                <li>
                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                </li>
                <li>
                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                </li>
                <li>
                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                </li>
          </ul>
        </li>
        <li>
        <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example-2" data-collapse-toggle="dropdown-example-2">
              <img src='${iconMoney}' class='flex-shrink-0 size-8 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'>
              <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Dépenses</span>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
        </button>
        <ul id="dropdown-example-2" class="hidden py-2 space-y-2">
              <li>
                <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Courses</a>
              </li>
              <li>
                <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Factures</a>
              </li>
              <li>
                <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Loyer</a>
              </li>
        </ul>
    </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src='${iconTalk}' class='flex-shrink-0 size-8 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'>
              <span class="flex-1 ms-3 whitespace-nowrap">Communications</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

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
    </ul>
  </div>
</aside>
`);