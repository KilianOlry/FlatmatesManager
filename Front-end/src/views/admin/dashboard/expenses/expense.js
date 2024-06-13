export default (item) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    description, date_limit, name, expense_id
  } = item;

  function formatDate(date) {
    return new Date(date).toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
  const date = formatDate(date_limit);

  return `
<div class="relative min-w-56 flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
  <div class='p-3'>
    <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -top-1 -left-6 grid h-10 w-10 place-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4 h-4 text-white">
        <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
        <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clip-rule="evenodd"></path>
        <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
      </svg>
    </div>
    <p class="absolute right-0 top-3 antialiased inline font-sans text-right text-sm blue-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">${date}</p>
  </div>

  <div class="mt-4 px-3">
    <h4 class="block capitalize antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">${name}</h4>
  </div>
  <div class="border-t border-blue-gray-50 p-4">
    <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">${description}</p>
  </div>
    <div class='flex items-center justify-between px-4 mb-2'>
    <form action="" class='change-status-expense'>
      <input type='hidden' value='${expense_id}' name='expense' class='test'>
      <span id="badge-dismiss-green" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-500 blue-200 rounded dark:bg-green-900 dark:text-green-300">
          Terminer
          <button type="submit" class="inline-flex items-center p-1 ms-2 text-sm text-blue-200 bg-transparent rounded-sm hover:bg-blue-300 hover:text-blue-900" data-dismiss-target="#badge-dismiss-green" aria-label="Remove">
            <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Remove badge</span>
          </button>
        </span>
    </form>
    </div>
</div>
    `;
};
