export default (category, images) => {
  const { name } = category;
  const urlImage = images[category.name];
  return `
    <div class='flex flex-col cursor-pointer bg-green-50 lg:flex-row items-center justify-evenly p-8 text-center border border-gray-200 md:rounded-es-lg md:border-e dark:bg-gray-800 dark:border-gray-700'>
        <img src='${urlImage}' class='rounded-full size-80' alt='image'>
        <div>
          <h2 class='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>${name}</h2>
        </div>
    </div>
  `;
};
