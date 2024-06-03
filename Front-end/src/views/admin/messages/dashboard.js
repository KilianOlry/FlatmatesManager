import form from './form';

export default () => `
<div class='p-8 h-full w-full flex justify-between'>

  ${form()}

  <div class='overflow-y-auto h-full flex flex-col gap-6'>
    <div class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 bg-white">
    <div class="grid grid-cols-6 p-5 gap-y-2">
      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>
      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-sky-500 font-bold text-xs"> Auteur de message </p>
        <p class="text-gray-600 font-bold"> Titre du message </p>
        <p class="text-gray-400"> Date de création du message </p>
        <p class="text-gray-400"> début du message </p>
      </div>
      <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p class="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> LU </p>
      </div>
    </div>
  </div>
  <div class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 bg-white">
    <div class="grid grid-cols-6 p-5 gap-y-2">
      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>
      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-sky-500 font-bold text-xs"> Auteur de message </p>
        <p class="text-gray-600 font-bold"> Titre du message </p>
        <p class="text-gray-400"> Date de création du message </p>
        <p class="text-gray-400"> début du message </p>
      </div>
      <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p class="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> LU </p>
      </div>
    </div>
  </div>
  <div class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 bg-white">
    <div class="grid grid-cols-6 p-5 gap-y-2">
      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>
      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-sky-500 font-bold text-xs"> Auteur de message </p>
        <p class="text-gray-600 font-bold"> Titre du message </p>
        <p class="text-gray-400"> Date de création du message </p>
        <p class="text-gray-400"> début du message </p>
      </div>
      <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p class="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> LU </p>
      </div>
    </div>
  </div>
  <div class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 bg-white">
    <div class="grid grid-cols-6 p-5 gap-y-2">
      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>
      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-sky-500 font-bold text-xs"> Auteur de message </p>
        <p class="text-gray-600 font-bold"> Titre du message </p>
        <p class="text-gray-400"> Date de création du message </p>
        <p class="text-gray-400"> début du message </p>
      </div>
      <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p class="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> LU </p>
      </div>
    </div>
  </div>
  <div class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 bg-white">
    <div class="grid grid-cols-6 p-5 gap-y-2">
      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>
      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-sky-500 font-bold text-xs"> Auteur de message </p>
        <p class="text-gray-600 font-bold"> Titre du message </p>
        <p class="text-gray-400"> Date de création du message </p>
        <p class="text-gray-400"> début du message </p>
      </div>
      <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p class="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> LU </p>
      </div>
    </div>
  </div>
  <div class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 bg-white">
    <div class="grid grid-cols-6 p-5 gap-y-2">
      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>
      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-sky-500 font-bold text-xs"> Auteur de message </p>
        <p class="text-gray-600 font-bold"> Titre du message </p>
        <p class="text-gray-400"> Date de création du message </p>
        <p class="text-gray-400"> début du message </p>
      </div>
      <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p class="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> LU </p>
      </div>
    </div>
  </div>
  <div class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 bg-white">
    <div class="grid grid-cols-6 p-5 gap-y-2">
      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>
      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-sky-500 font-bold text-xs"> Auteur de message </p>
        <p class="text-gray-600 font-bold"> Titre du message </p>
        <p class="text-gray-400"> Date de création du message </p>
        <p class="text-gray-400"> début du message </p>
      </div>
      <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p class="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> LU </p>
      </div>
    </div>
  </div>
  <div class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 bg-white">
    <div class="grid grid-cols-6 p-5 gap-y-2">
      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>
      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-sky-500 font-bold text-xs"> Auteur de message </p>
        <p class="text-gray-600 font-bold"> Titre du message </p>
        <p class="text-gray-400"> Date de création du message </p>
        <p class="text-gray-400"> début du message </p>
      </div>
      <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p class="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> LU </p>
      </div>
    </div>
  </div>
  </div>
  
</div>
`;
