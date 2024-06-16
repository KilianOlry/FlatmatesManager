import task from './task';

const renderComponent = (dataTasks) => {
  const hasExpenses = Object.keys(dataTasks).length > 0;

  const content = hasExpenses
    ? `<section class='overflow-x-auto flex gap-10 p-3'>
        ${dataTasks.map(task).join('')}
       </section>`

    : "<h2 class='text-xl'>Aucune tâche prévue.<h2>";

  return content;
};

export default renderComponent;
