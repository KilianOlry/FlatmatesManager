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
      year: 'numeric'
    });
  }
  const date = formatDate(date_limit);

  return `
<div class="relative min-w-56 flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
  <div class='p-3'>
    <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -top-2 -left-6 grid h-10 w-10 place-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark-check"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/><path d="m9 10 2 2 4-4"/></svg>
    </div>
    <p class="antialiased font-sans text-right text-sm leading-normal font-normal text-blue-gray-600">${date}</p>
  </div>

  <div class="mt-4 px-3">
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
