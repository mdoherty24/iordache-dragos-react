import { render as renderPet } from './pet.js';

export const render = (contact) => {
  const contactContainer = document.createElement('article');
  contactContainer.classList.add('contact', 'border', 'p-3');

  const heading = document.createElement('h1');
  heading.textContent = `${contact.name} ${contact.surname}`;

  const information = document.createElement('ul');
  const phone = document.createElement('li');
  const email = document.createElement('li');
  phone.textContent = contact.phone;
  email.textContent = contact.email;
  information.append(phone);
  information.append(email);

  const deleteButton = document.createElement('button');
  deleteButton.dataset.contactId = contact.id;
  deleteButton.classList.add('delete-contact', 'btn' ,'btn-secondary');
  deleteButton.type = 'button';
  deleteButton.textContent = 'Delete';

  const editButton = document.createElement('button');
  editButton.dataset.contactId = contact.id;
  editButton.classList.add('edit-contact', 'btn' ,'btn-secondary', 'mx-2');
  editButton.type = 'button';
  editButton.textContent = 'Edit';

  const addPetButton = document.createElement('button');
  addPetButton.dataset.contactId = contact.id;
  addPetButton.type = 'button';
  addPetButton.classList.add('add-pet-button', 'btn' ,'btn-secondary');
  addPetButton.textContent = 'Add pet';

  contactContainer.append(heading);
  contactContainer.append(information);
  contactContainer.append(deleteButton);
  contactContainer.append(editButton);
  contactContainer.append(addPetButton);

  if (Array.isArray(contact.pets) && contact.pets.length > 0) {
    const petsContainer = document.createElement('div');

    for (let i = 0; i < contact.pets.length; i++) {
      const pet = contact.pets[i];

      petsContainer.append(renderPet(contact.id, pet));
    }

    contactContainer.append(petsContainer);
  }

  return contactContainer;
};
