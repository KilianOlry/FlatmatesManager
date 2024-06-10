import members from './members/members';
import tasksUser from './tasks/tasks';

export default (dataMembres, tasks) => (`

<section class='w-full p-10'>

  <h1 class="tracking-in-expand my-8 text-2xl capitalize font-extrabold text-green-900 dark:text-white md:text-5xl lg:text-4xl">
    <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-400">à</span> faire
  </h1>

  <div class='flex justify-between'>

  
  ${tasksUser(tasks)}
  ${members(dataMembres)}

  </div>

</section>
`);
