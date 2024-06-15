import expense from './expense';

const renderComponent = (dataExpense) => {
  const hasExpenses = Object.keys(dataExpense).length > 0;
  const content = hasExpenses
    ? `<section class='flex gap-7 p-3'>
        ${dataExpense.map(expense).join('')}
       </section>`

    : "<h2 class='text-xl'>Vous n'avez pas de dépenses de prévu<h2>";

  return content;
};

export default renderComponent;
