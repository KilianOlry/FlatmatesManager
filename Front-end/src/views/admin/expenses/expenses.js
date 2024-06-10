// import viewModal from './modal';
import itemCategory from './expense';

import credit from '../../../assets/credit.webp';
import loyer from '../../../assets/loyer.webp';
import facturess from '../../../assets/factures.webp';
import repair from '../../../assets/repair.webp';

const images = {
  credits: credit,
  courses: loyer,
  factures: facturess,
  loyer: repair
};

const renderComponent = (categoryItems) => `
  <div class="grid mb-8 relative border w-full rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="btn-modal flex justify-center items-center rounded-full text-white green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium w-32 h-32 text-lg p-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
      Centre d'opérations
    </button>
    ${categoryItems.map((category) => itemCategory(category, images)).join('')}
  </div>
`;

export default renderComponent;
