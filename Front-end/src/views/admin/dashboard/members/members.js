import member from './member';

const renderComponent = (member) => `
  <div class="grid mb-8 relative border w-full rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
    <button data-modal-target="select-modal" data-modal-toggle="select-modal" class="btn-modal flex justify-center items-center rounded-full text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium w-32 h-32 text-lg p-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
      Centre d'opérations
    </button>
    ${member.map((category) => member(category, images)).join('')}
  </div>
`;

export default renderComponent;
