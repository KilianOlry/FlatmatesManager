import card from './card';

export default () => (`
<h1 class="tracking-in-expand my-10 text-2xl text-center font-extrabold text-green-900 dark:text-white md:text-5xl lg:text-6xl">
  <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-400">Nous Vous</span> 
  Proposons 
</h1>
<div class='flex flex-wrap container mx-auto gap-16 justify-center my-12'>
  ${card('Rejoindre une colocation')}
  ${card('Créer une colocation')}
</div>
`);
