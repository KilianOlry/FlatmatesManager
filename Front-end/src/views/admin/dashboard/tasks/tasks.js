import task from './task';

const renderComponent = (dataTasks) => `
  <section class='flex p-3'>
    ${dataTasks.map((item) => task(item)).join('')}
  </section>
  `;

export default renderComponent;
