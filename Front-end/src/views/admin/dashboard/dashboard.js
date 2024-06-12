// import members from '../global/members/members';
import tasksUser from './tasks/tasks';
import expensesUser from './expenses/expenses';

export default (tasks, expenses) => `
  <section class='w-full px-8'>

    <div class='flex justify-between'>

      <div>

        <div>
          <h1 class="tracking-in-expand my-10 text-2xl capitalize font-extrabold text-green-900 dark:text-white md:text-5xl lg:text-4xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-400">Tâches à</span> faire
          </h1>
          ${tasksUser(tasks)}
        </div>

        <div>
          <h1 class="tracking-in-expand my-10 text-2xl capitalize font-extrabold text-green-900 dark:text-white md:text-5xl lg:text-4xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-400">Facture </span>à payer
          </h1>
          ${expensesUser(expenses)}
        </div>

      </div>
      
      <div class='bg-white p-5 rounded-md shadow-sm'>
        <div id='calendar'></div>
      </div>

      </div>
      
      
  </section>
`;
