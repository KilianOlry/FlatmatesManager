import cleanImage from '../../../assets/clean.webp';
import shoppingImage from '../../../assets/shop.webp';
import cookImage from '../../../assets/cook.webp';
import poubelleImage from '../../../assets/poubelle.webp';
import viewModal from './modal';

export default () => (`

<div class="grid mb-8 relative border w-full rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
    
  <button data-modal-target="select-modal" data-modal-toggle="select-modal" class="btn-modal flex justify-center items-center rounded-full text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium w-32 h-32 text-lg p-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    Centre d'opérations
    </button>


    <div class='flex flex-col bg-green-50 lg:flex-row items-center justify-evenly p-8 text-center border border-gray-200 md:rounded-es-lg md:border-e dark:bg-gray-800 dark:border-gray-700'>
      <img src='${cleanImage}' class='rounded-full size-80' alt='image'>
      <div>
        <h2 class='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>Tâches Ménagères</h2>
      </div>
    </div>

    <div class='flex flex-col lg:flex-row items-center justify-evenly p-8 border-b border-gray-200 md:rounded-es-lg md:border-e dark:bg-gray-800 dark:border-gray-700'>
      <img src='${cookImage}' class='rounded-full size-80' alt='image'>
      <div>
        <h2 class='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>Cuisine</h2>
      </div>
    </div>

    <div class='flex flex-col lg:flex-row items-center justify-evenly p-8 text-center border-b border-gray-200 md:rounded-es-lg md:border-e dark:bg-gray-800 dark:border-gray-700'>
      <img src='${shoppingImage}' class='rounded-full size-80' alt='image'>
      <div>
        <h2 class='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>Courses</h2>
      </div>
    </div>

    <div class='flex flex-col bg-green-50 lg:flex-row items-center justify-evenly p-8 border-b border-gray-200 md:rounded-es-lg md:border-e dark:bg-gray-800 dark:border-gray-700'>
      <img src='${poubelleImage}' class='rounded-full size-80' alt='image'>
      <div>
        <h2 class='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>Sortir les ordures</h2>
      </div>
    </div>

</div>
${viewModal()}
`);
