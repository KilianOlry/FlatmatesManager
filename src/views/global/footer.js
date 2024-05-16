import logo from '../../assets/logo.webp';

export default () => (`
<footer class="bg-white dark:bg-gray-900">
  <div class="container px-6 py-8 mx-auto">
    <div class="flex flex-col items-center text-center">
      <a href="#">
          <img class="w-auto h-7" src="${logo}" alt="logo entreprise">
      </a>
      <p class="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">Merci de votre visite</p>
    </div>

    <hr class="my-10 border-gray-200 dark:border-gray-700" />

    <div class="flex flex-col items-center sm:flex-row sm:justify-between">
      <p class="text-sm text-gray-500">© Copyright 2021. All Rights Reserved.</p>

      <div class="flex mt-3 -mx-2 sm:mt-0">
          <a href="#" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

          <a href="#" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

          <a href="#" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
      </div>
    </div>
  </div>
</footer>
`);
