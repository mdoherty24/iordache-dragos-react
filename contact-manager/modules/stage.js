import { render as renderMessage } from './message.js';
import { addMessage } from './notification-bar.js';
import { deleteContact } from './query.js';

const stage = document.querySelector('.stage');

stage.addEventListener('click', (event) => {
  const button = event.target;

  if (
    button.nodeName === 'BUTTON' &&
    button.classList.contains('delete-contact')
  ) {
    const contactId = button.dataset.contactId;

    deleteContact(contactId);

    const contactContainer = button.closest('.contact');
    contactContainer.remove();

    const messageContainer = renderMessage('Contact removed.', 'success');
    addMessage(messageContainer);
  }
});

export const clearStage = () => {
  stage.innerHTML = '';
};

export default stage;
