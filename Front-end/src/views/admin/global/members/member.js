export default (item) => {
  const { firstname } = item;
  return `
    <li class='flex gap-4 items-center my-4 list-style-none text-center'>
      <img class="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://th.bing.com/th/id/OIP.fQhL-xGh_QifdBufpDnbPgAAAA?rs=1&pid=ImgDetMain" alt="${firstname}">
      ${firstname}
    </li>
  `;
};
