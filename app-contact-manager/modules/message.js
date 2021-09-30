export const render = (message, type) => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('alert', `alert-${type}`);

  messageContainer.textContent = message;

  return messageContainer;
};
