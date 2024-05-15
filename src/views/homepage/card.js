export default (title) => (`
  <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
    <div class="relative">
      <img class="w-full rounded-xl" src="https://img.freepik.com/vecteurs-libre/illustration-concept-petite-maison_114360-9087.jpg?t=st=1715605297~exp=1715608897~hmac=63558cb64e06406d159de9d88340f595dc16539276563cd633642784c4f0322c&w=1060" alt="Colors" />
    </div>
    <div class="my-4">
      <button class="test mt-4 text-xl capitalize w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">${title}</button>
    </div>
  </div>
`);
