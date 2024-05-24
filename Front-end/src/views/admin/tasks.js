import cleanImage from '../../assets/clean.webp';
import shoppingImage from '../../assets/shop.webp';
import cookImage from '../../assets/cook.webp';
import poubelleImage from '../../assets/poubelle.webp';

export default () => (`
<div class="grid mb-8 border w-full border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        
    <div class='flex flex-col bg-green-50 sm:flex-row items-center justify-center p-8 text-center border border-gray-200 md:rounded-es-lg md:border-e dark:bg-gray-800 dark:border-gray-700'>
      <img src='${cleanImage}' class='rounded-full size-80' alt='image'>
      <div>
        <h2 class='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>Tâches Ménagères</h2>
      </div>
    </div>

    <div class='flex flex-col sm:flex-row items-center justify-center p-8 text-center border-b border-gray-200 md:rounded-es-lg md:border-e dark:bg-gray-800 dark:border-gray-700'>
      <img src='${shoppingImage}' class='rounded-full size-80' alt='image'>
      <div>
        <h2 class='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>Courses</h2>
      </div>
    </div>

    <div class='flex flex-col sm:flex-row items-center justify-center p-8 text-center border-b border-gray-200 md:rounded-es-lg md:border-e dark:bg-gray-800 dark:border-gray-700'>
      <img src='${cookImage}' class='rounded-full size-80' alt='image'>
      <div>
        <h2 class='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>Cuisine</h2>
      </div>
    </div>

    <div class='flex flex-col bg-green-50 sm:flex-row items-center justify-center p-8 text-center border-b border-gray-200 md:rounded-es-lg md:border-e dark:bg-gray-800 dark:border-gray-700'>
      <img src='${poubelleImage}' class='rounded-full size-80' alt='image'>
      <div>
        <h2 class='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>Sortir les ordures</h2>
      </div>
    </div>



</div>


`);
