import card from './card';

const connect = true;
export default (ifAdmin) => (`
<h1 class="tracking-in-expand my-24 text-2xl text-center font-extrabold text-customGreen-900 dark:text-white md:text-5xl lg:text-5xl">
  <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-400">Nous Vous</span> 
  Proposons 
</h1>
<div class='flex px-2 flex-wrap container mx-auto gap-16 justify-center my-12' id='flatmate'>
  ${card('Rejoindre une colocation', connect)}

  ${ifAdmin ? `
  ${card('Créer une colocation')}
  ` : `
  
  `}

</div>
`);
