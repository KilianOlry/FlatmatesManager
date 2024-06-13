import iconProfil from '../../../assets/icons/profil.svg';

export default () => `
<div class="flex md:w-1/2 justify-center py-10 items-center bg-white rounded-md">
  <form class="form-create-message bg-white" method='POST'>
    <h1 class="text-gray-800 font-bold text-2xl mb-1">Écrire un message</h1>
    <p class="text-sm font-normal text-gray-600 mb-7">Il sera visible par l'ensemble des membres de la colocation</p>
    <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
      <img src='${iconProfil}' class='size-5'>
      <input class="pl-2 outline-none border-none w-full" type="text" name="title" placeholder="Titre du message" />
    </div>
      <div class=" border-2 my-4 py-2 px-3 rounded-2xl">
        <textarea name='message' rows="4" class="resize-none block p-2.5 w-full text-md text-gray-900 rounded-lg border-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Votre message"></textarea>
      </div>
      
      <div class='message-status-match-password'></div>
      <button type="submit" class="block w-full bg-green-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Envoyer</button>
      <p class ='text-sm ml-2 '>Vous pourrez supprimer votre message par la suite</p>
  </form>
</div>
`;
