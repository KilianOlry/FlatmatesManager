import messageFlatmates from './messages/messages';
import tasksUser from './tasks/tasks';
import expensesUser from './expenses/expenses';

export default (tasks, expenses, messages) => `
  <section class='w-full pr-8 pl-14'>

    <div class='flex justify-between'>

      <div>

        <div>
          <h1 class="tracking-in-expand my-4 text-2xl capitalize font-extrabold text-green-900 dark:text-white md:text-5xl lg:text-4xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-400">Tâches à</span> faire
          </h1>
          ${tasksUser(tasks)}
        </div>

        <div>
          <h1 class="tracking-in-expand my-4 text-2xl capitalize font-extrabold text-green-900 dark:text-white md:text-5xl lg:text-4xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-400">Facture </span>à payer
          </h1>
          ${expensesUser(expenses)}
        </div>

        <div>
          <h1 class="tracking-in-expand my-4 text-2xl capitalize font-extrabold text-green-900 dark:text-white md:text-5xl lg:text-4xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-400">Message </span>important
          </h1>
          ${messageFlatmates(messages)}
        </div>

      </div>
      
      <div class='bg-white p-5 rounded-lg shadow-sm'>
        <div id='calendar'></div>
      </div>

      </div>
      
      
  </section>
`;
