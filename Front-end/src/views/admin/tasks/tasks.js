import viewModal from './modal';
import itemCategory from './task';

import cleanImage from '../../../assets/clean.webp';
import shoppingImage from '../../../assets/shop.webp';
import cookImage from '../../../assets/cook.webp';
import poubelleImage from '../../../assets/poubelle.webp';

const images = {
  'tâches ménagère': cleanImage,
  courses: shoppingImage,
  cuisine: cookImage,
  'sortir les poubelles': poubelleImage
};

const renderComponent = (categoryItems) => `
  <div class="grid mb-8 relative border w-full rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
    <button data-modal-target="select-modal" data-modal-toggle="select-modal" class="btn-modal flex justify-center items-center rounded-full text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium w-32 h-32 text-lg p-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
      Centre d'opérations
    </button>
    ${categoryItems.map((category) => itemCategory(category, images)).join('')}
  </div>
  ${viewModal()}
`;

export default renderComponent;
