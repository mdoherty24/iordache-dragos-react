import stage from './stage.js';
import { render as renderAddContact } from './add-contact.js';

const addContactButton = document.querySelector('.add-contact-button');

addContactButton.addEventListener('click', (event) => {
  stage.innerHTML = '';

  stage.append(renderAddContact());
});

export default addContactButton;
