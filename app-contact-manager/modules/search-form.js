import stage from './stage.js';
import { addMessage } from './notification-bar.js';

import { findContact } from './query.js';
import { render as renderContact } from './contact.js';
import { render as renderMessage } from './message.js';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const queryString = formData.get('q');

  if (queryString.trim().length < 1) {
    return;
  }

  const contacts = findContact(queryString);
  const fragment = new DocumentFragment();
  const contactsCount = contacts.length;

  contacts.forEach((contact) => {
    fragment.append(renderContact(contact));
  });

  // find the input and clear it
  form.querySelector('[name="q"]').value = '';

  if (contactsCount < 1) {
    addMessage(renderMessage('No contacts found', 'warning'));

    return;
  } else {
    const petsCount = contacts.reduce((petsCount, contact) => {
      // sanity check for pets
      contact.pets = contact.pets || [];
      petsCount += contact.pets.length;

      return petsCount;
    }, 0);

    addMessage(
      renderMessage(
        `Found ${contactsCount} ${
          contactsCount > 1 ? 'contacts' : 'contact'
        } with ${petsCount < 1 ? 'no' : petsCount} ${
          petsCount < 2 ? 'pets' : 'pet'
        }.`,
        'success',
      ),
    );
  }

  stage.innerHTML = '';
  stage.append(fragment);
});

export default searchForm;
