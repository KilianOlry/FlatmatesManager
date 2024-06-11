import expense from './expense';

const renderComponent = (dataExpense) => `
  <section class='flex gap-7 p-3'>
    ${dataExpense.map((item) => expense(item)).join('')}
  </section>
  `;

export default renderComponent;
