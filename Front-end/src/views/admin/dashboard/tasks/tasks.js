import task from './task';

const renderComponent = (dataTasks) => {
  const hasExpenses = Object.keys(dataTasks).length > 0;

  const content = hasExpenses
    ? `<div class='overflow-x-auto max-w-screen-sm lg:max-w-screen-md flex gap-10 p-3'>
        ${dataTasks.map(task).join('')}
       </div>`

    : "<h2 class='text-xl'>Aucune tâche prévue.<h2>";

  return content;
};

export default renderComponent;
