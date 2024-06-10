export default (item) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    description, date_limit, name, priority, id
  } = item;

  function formatDate(date) {
    return new Date(date).toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit'
    });
  }
  const date = formatDate(date_limit);

  return `
<div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
  <div class='p-3'>
    <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -top-2 -left-6 grid h-16 w-16 place-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
      </svg>
    </div>
    <p class="antialiased font-sans text-right text-sm leading-normal font-normal text-blue-gray-600">${date}</p>
  </div>

  <div class="mt-4 px-10">
    <h4 class="block capitalize antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">${name}</h4>
  </div>
  <div class="border-t border-blue-gray-50 p-4">
    <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">${description}</p>
  </div>
    <div class='flex items-center justify-between px-4'>
    <form action="" class='change-status-task'>
      <input type='hidden' value='${id}' name='task' class='test'>
      <button type='submit'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5zm12.78-8.82a.75.75 0 0 0-1.06-1.06L9.162 9.177L7.289 7.241a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01z" clip-rule="evenodd"/></svg>
      </button>
    </form>
      <span class="priority-tag text-sm font-medium rounded">${priority === 'null' ? 'pas de description' : priority}</span>
    </div>
</div>
    `;
};
