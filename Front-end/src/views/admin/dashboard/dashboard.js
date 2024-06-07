export default () => (`
<section class='w-full p-10'>

  <h1 class="tracking-in-expand my-8 text-2xl capitalize font-extrabold text-green-900 dark:text-white md:text-5xl lg:text-4xl">
    <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-400">à</span> faire
  </h1>

  <div class='flex justify-between'>
    <ol class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
      <li class="mb-10 ms-6">            
          <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              <svg class="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
              </svg>
          </span>
          <h3 class="font-medium leading-tight">Tâches ménagère</h3>
          <p class="text-sm">Passer l'aspirateur dans tout l'appartement</p>
      </li>
      <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
              </svg>
          </span>
          <h3 class="font-medium leading-tight">Dépenses</h3>
          <p class="text-sm">Step details here</p>
      </li>
      <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
              </svg>
          </span>
          <h3 class="font-medium leading-tight">Review</h3>
          <p class="text-sm">Step details here</p>
      </li>
      <li class="ms-6">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
              </svg>
          </span>
          <h3 class="font-medium leading-tight">Confirmation</h3>
          <p class="text-sm">Step details here</p>
      </li>
    </ol>

    <ul>
      <li>membres</li>
      <li class='my-4' data-popover-target="popover-default">
        <img class="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://th.bing.com/th/id/OIP.fQhL-xGh_QifdBufpDnbPgAAAA?rs=1&pid=ImgDetMain" alt="Bordered avatar">
      </li>
      <li class='my-4' data-popover-target="popover-default">
        <img class="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://th.bing.com/th/id/OIP.fQhL-xGh_QifdBufpDnbPgAAAA?rs=1&pid=ImgDetMain" alt="Bordered avatar">
      </li>
      <li class='my-4' data-popover-target="popover-default">
        <img class="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://th.bing.com/th/id/OIP.fQhL-xGh_QifdBufpDnbPgAAAA?rs=1&pid=ImgDetMain" alt="Bordered avatar">
      </li>
      <li class='my-4' data-popover-target="popover-default">
        <img class="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://th.bing.com/th/id/OIP.fQhL-xGh_QifdBufpDnbPgAAAA?rs=1&pid=ImgDetMain" alt="Bordered avatar">
      </li>
    <ul>

  <div>

</section>
<div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
        <h3 class="font-semibold text-gray-900 dark:text-white">Kilian Olry</h3>
    </div>
</div>

`);
