import viewModal from './modal';
import itemCategory from './task';

import cleanImage from '../../../assets/clean.webp';
import shoppingImage from '../../../assets/shop.webp';
import cookImage from '../../../assets/cook.webp';
import poubelleImage from '../../../assets/poubelle.webp';

const images = {
  'tâches ménagères': cleanImage,
  courses: shoppingImage,
  cuisine: cookImage,
  'sortir les poubelles': poubelleImage
};

const renderComponent = (categoryItems, flatmates) => `
  <div class="grid gap-2 mb-8 relative w-full shadow-sm md:mb-12 md:grid-cols-2">
    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="btn-modal shadow-green-800/40 shadow-md flex justify-center items-center rounded-full text-white bg-customGreen-500 hover:bg-customGreen-500 focus:ring-4 focus:outline-none focus:ring-customGreen-300 font-medium w-32 h-32 text-lg p-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
      Ajouter une tâche
    </button>
    ${categoryItems.map((category) => itemCategory(category, images)).join('')}
  </div>
  ${viewModal(categoryItems, flatmates)}
`;

export default renderComponent;
