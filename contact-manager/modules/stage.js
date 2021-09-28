import { render as renderEditForm } from './edit-contact.js';
import { render as renderMessage } from './message.js';
import { addMessage } from './notification-bar.js';
import { deleteContact, getContact } from './query.js';

const stage = document.querySelector('.stage');

// delete contact
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

// start edit contact
stage.addEventListener('click', (event) => {
  const button = event.target;

  if (
    button.nodeName === 'BUTTON' &&
    button.classList.contains('edit-contact')
  ) {
    const contactId = button.dataset.contactId;
    const contact = getContact(contactId);

    if (!contact) {
      return;
    }

    clearStage();
    stage.append(renderEditForm(contact));
  }
});

export const clearStage = () => {
  stage.innerHTML = '';
};

export default stage;
