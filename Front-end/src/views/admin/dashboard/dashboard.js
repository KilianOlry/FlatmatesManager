import members from './members/members';
import tasksUser from './tasks/tasks';

export default (dataMembres, tasks) => (`

<section class='w-full px-10'>

  <div class='flex justify-between items-center'>

    <div>

      <div>
        <h1 class="tracking-in-expand my-10 text-2xl capitalize font-extrabold text-green-900 dark:text-white md:text-5xl lg:text-4xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-400">à</span> faire
        </h1>
        ${tasksUser(tasks)}
      </div>

      <div>
        <h1 class="tracking-in-expand my-10 text-2xl capitalize font-extrabold text-green-900 dark:text-white md:text-5xl lg:text-4xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-400">Facture </span>à payer
        </h1>
      </div>

    </div>

    ${members(dataMembres)}
    

  </div>

</section>
`);
