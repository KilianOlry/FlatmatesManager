import task from './task';

const renderComponent = (dataTasks) => {
  const hasExpenses = Object.keys(dataTasks).length > 0;

  const content = hasExpenses
    ? `<section class='flex gap-7 p-3'>
        ${dataTasks.map(task).join('')}
       </section>`

    : "<h2 class='text-xl'>Vous n'avez pas de dépenses de prévu<h2>";

  return content;
};

export default renderComponent;
