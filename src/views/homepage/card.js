import imageHome from '../../assets/home.webp';

export default (title) => (`
  <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
    <div class="relative">
      <img class="w-full rounded-xl" src="${imageHome}" alt="Colors" />
    </div>
    <div class="my-4">
      <button class="test mt-4 text-xl capitalize w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">${title}</button>
    </div>
  </div>
`);
