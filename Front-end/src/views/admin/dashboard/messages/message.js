export default (item) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    title, content, user_id, created_at
  } = item;

  function formatDate(date) {
    return new Date(date).toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
  const date = formatDate(created_at);

  return `
<div class="relative min-w-56 flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
  <div class='p-3'>
    <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -top-1 -left-6 grid h-10 w-10 place-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class='w-4 h-4 text-white' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
    </div>
    <p class="absolute right-0 top-3 antialiased inline font-sans text-right text-sm orange-200 text-orange-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded">${date}</p>
  </div>

  <div class="mt-4 px-3">
    <h4 class="block capitalize antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">${title}</h4>
  </div>
  <div class="border-t border-blue-gray-50 p-4">
    <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">${content}</p>
  </div>
    <div class='flex items-center justify-between px-4 mb-2'>
    <form action="" class='change-status-expense'>
      <input type='hidden' value='${user_id}' name='expense' class='test'>
      <span id="badge-dismiss-green" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-orange-700 orange-200 rounded dark:bg-green-900 dark:text-green-300">
          Terminer
          <button type="submit" class="inline-flex items-center p-1 ms-2 text-sm text-orange-400 bg-transparent rounded-sm hover:bg-orange-300 hover:text-orange-900" data-dismiss-target="#badge-dismiss-green" aria-label="Remove">
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
