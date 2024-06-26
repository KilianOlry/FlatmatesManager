import messageFlatmates from './messages/messages';
import tasksUser from './tasks/tasks';
import expensesUser from './expenses/expenses';

export default (tasks, expenses, messages) => `
  <section class='w-full pr-8 pl-3 sm:pl-14'>

    <div class='flex lg:flex-row justify-between'>

      <div class='mt-7 lg:mt-0'>

        <div>
          <h1 class="tracking-in-expand my-4 text-3xl sm:text-4xl capitalize font-extrabold text-customGreen-900">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-400">Tâches à</span> faire
          </h1>
          ${tasksUser(tasks)}
        </div>

        <div>
          <h1 class="tracking-in-expand my-4 text-3xl sm:text-4xl capitalize font-extrabold text-customGreen-900 dark:text-white">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-400">Factures </span>à payer
          </h1>
          ${expensesUser(expenses)}
        </div>

        <div>
          <h1 class="tracking-in-expand my-4 text-3xl sm:text-4xl capitalize font-extrabold text-customGreen-900 dark:text-white">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-400">Messages </span>importants
          </h1>
          ${messageFlatmates(messages)}
        </div>

      </div>
      
      
      <div class='bg-white p-5 rounded-lg shadow-sm hidden lg:flex'>
        <div class='calendar__dashboard'></div>
      </div>

    </div>

  </section>
`;
