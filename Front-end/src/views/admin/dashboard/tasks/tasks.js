import task from './task';

const renderComponent = (dataTasks) => `
  <section class='flex gap-7 p-3'>
    ${dataTasks.map((item) => task(item)).join('')}
  </section>
  `;

export default renderComponent;
