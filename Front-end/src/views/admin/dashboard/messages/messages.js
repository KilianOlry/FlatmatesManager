import message from './message';

const renderComponent = (messageFlatmates) => {
  const hasMessages = Object.keys(messageFlatmates).length > 0;

  const content = hasMessages
    ? `<section class='flex gap-7 p-3'>
        ${messageFlatmates.map(message).join('')}
       </section>`

    : "<h2 class='text-xl'>Vous n'avez pas de nouveaux messages<h2>";

  return content;
};

export default renderComponent;
