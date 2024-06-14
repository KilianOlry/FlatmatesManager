import imageHome from '../../assets/home.webp';
import modal from './modal';

export default (title, connect) => (`
<div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform md:hover:scale-105 transition duration-500">
  <div class="relative">
    <img class="w-full rounded-xl" src="${imageHome}" alt="Colors" />
  </div>

  ${connect ? `
  <div class="my-4">
    <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="test mt-4 text-xl capitalize w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">${title}</button>
  </div>
  `
    : `
  <div class="my-4">
    <button data-modal-target="registration-modal" data-modal-toggle="registration-modal" class="test mt-4 text-xl capitalize w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">${title}</button>
  </div>
  `}
</div>

${modal()}
${modal(connect)}
`);
