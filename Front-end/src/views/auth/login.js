import iconVisibility from '../../assets/icons/visibility.svg';
import iconLock from '../../assets/icons/lock.svg';
import iconEmail from '../../assets/icons/@.svg';

export default () => (`
<div class="h-screen md:flex">
  <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-green-300 to-green-400 justify-around items-center hidden">

    <div>
      <h1 class="text-white font-bold text-6xl font-sans tracking-widest">Colocation</h1>
      <p class="text-white mt-1">Gestion de la colocation</p>
      <button type="submit" class="block w-28 bg-white text-green-800 mt-4 py-2 rounded-2xl font-bold mb-2">
      <a href="/register">S'inscrire</a>
      </button>
    </div>

    <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
    <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
    <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
    <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>

  </div>

  <div class="flex md:w-1/2 h-screen sm:screen-auto justify-center py-10 items-center bg-white">
    <form class="login-form bg-white">
      <h1 class="text-gray-800 font-bold text-2xl mb-1">Se connecter</h1>
      <p class="text-sm font-normal text-gray-600 mb-7">Pour accéder à votre espace personnel</p>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <img src='${iconEmail}' class='size-5 cursor-pointer'>
          <input class="email-input w-full pl-2 outline-none border-none" type="email" name="email" placeholder="Adresse Email" />
        </div>
        <div class='message-status-email'></div>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
          <img src='${iconLock}' class='size-5 cursor-pointer'>
          <input class="password-input w-full pl-2 outline-none border-none" type="password" name="password" placeholder="Mot de passe" />
          <img src='${iconVisibility}' class='visibility size-5 cursor-pointer'>
        </div>
        <div class='message-status-password'></div>
        <button type="submit" class="btn-submit block w-full bg-green-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" disabled>Connexion</button>
        <p class ='text-sm ml-2 '>Vous n'avez pas de compte ?<a href="/register" class='text-green-500 hover:text-green-600 cursor-pointer font-bold'> Créé le !</a></p>
      </form>
  </div>
</div>
`);
