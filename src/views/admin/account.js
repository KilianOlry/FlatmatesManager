import iconVisibility from '../../assets/icons/visibility.svg';
import iconLock from '../../assets/icons/lock.svg';
import iconEmail from '../../assets/icons/@.svg';
import iconProfil from '../../assets/icons/profil.svg';

export default () => (`
<div class="w-full md:flex">
  <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-green-400 to-green-500 i justify-around items-center hidden">
   
  <div class='flex items-center'>
  <div class="sm:mt-40 mt-24 my-auto max-w-md border-2 border-gray-200 rounded-[20px] p-3 bg-gray-800">
  <!-- header -->  
  <div class="text-center m-6">
    <h1 class="text-3xl font-semibold text-gray-100">Vos informations personnel</h1>
  </div>
  <!-- sign-in -->
  <div class="m-6">
      <div class="mb-6">
        <p class="text-gray-200 font-bold">Votre Prénom :</p>
      </div>
      <div class="mb-6">
        <p class="text-gray-200 font-bold">Votre Nom :</p>
      </div>
      <div class="mb-6">
        <p class="text-gray-200 font-bold">Votre Email :</p>
      </div>
  </div> 
  </div>
</div>

      <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>

  </div>

  <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
    <form class="bg-white">
      <h1 class="text-gray-800 font-bold text-2xl mb-7">Modifier votre profil</h1>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <img src='${iconProfil}' class='size-5'>
        <input class="pl-2 outline-none border-none w-full" type="text" name="" id="" placeholder="Prénom" />
      </div>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <img src='${iconProfil}' class='size-5'>
        <input class="pl-2 outline-none border-none w-full" type="text" name="" id="" placeholder="Nom" />
      </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <img src='${iconEmail}' class='size-5'>
            <input class="email-input pl-2 outline-none border-none w-full" type="email" name="" id="" placeholder="Adresse Email" />
          </div>
          <div class='message-status-email'></div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
            <img src='${iconLock}' class='size-5 cursor-pointer'>
            <input class="password-input pl-2 outline-none border-none w-full" type="password" name="" id="" placeholder="Mot de passe" />
            <img src='${iconVisibility}' class='visibility size-5 cursor-pointer'>
          </div>
          <div class='message-status-password'></div>
          <div class="flex items-center border-2 my-4 py-2 px-3 rounded-2xl">
            <img src='${iconLock}' class='size-5 cursor-pointer'>
            <input class="verify-password pl-2 w-full outline-none border-none" type="password" name="" id="" placeholder="Confirmation Mot de passe" />
            <img src='${iconVisibility}' class='visibility size-5 cursor-pointer'>
          </div>
          <div class='message-status-match-password'></div>
          <button type="submit" class="block w-full bg-green-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Modifier votre profil</button>
      </form>
  </div>
</div>
    `
);
