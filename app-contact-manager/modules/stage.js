import {
  addContact,
  deleteContact,
  editContact,
  getContact,
  addPet,
  deletePet,
  getPet,
} from './query.js';
import { render as renderEditContact } from './edit-contact.js';
import { render as renderMessage } from './message.js';
import { render as renderAddPetForm } from './add-pet.js';
import { render as renderEditPet } from './edit-pet.js';
import { contacts } from './data.js';
import { addMessage } from './notification-bar.js';

const stage = document.querySelector('.stage');

// delete contact
stage.addEventListener('click', (event) => {
  const button = event.target;

  if (
    button.nodeName === 'BUTTON' &&
    button.classList.contains('delete-contact')
  ) {
    const contactId = button.dataset.contactId;
    deleteContact(Number(contactId));

    const contactContainer = button.closest('.contact');
    contactContainer.remove();

    const messageContainer = renderMessage(`Contact removed.`, 'success');

    addMessage(messageContainer);
  }
});

// edit contact button
stage.addEventListener('click', (event) => {
  const button = event.target;

  if (
    button.nodeName === 'BUTTON' &&
    button.classList.contains('edit-contact')
  ) {
    const contactId = Number(button.dataset.contactId);
    const contact = getContact(contactId);

    if (!contact) {
      return;
    }

    stage.innerHTML = '';

    stage.append(renderEditContact(contact));
  }
});

// cancel button
stage.addEventListener('click', (event) => {
  const button = event.target;

  if (
    button.nodeName === 'BUTTON' &&
    button.classList.contains('cancel-button')
  ) {
    stage.innerHTML = '';
  }
});

// edit contact
stage.addEventListener('submit', (event) => {
  const form = event.target;

  if (form.nodeName === 'FORM' && form.classList.contains('edit-contact')) {
    event.preventDefault();

    const formData = new FormData(form);
    const contact = {};
    const entries = formData.entries();
    let currentEntry = entries.next();

    while (currentEntry.done === false) {
      const [key, value] = currentEntry.value;

      contact[key] = value;

      currentEntry = entries.next();
    }

    editContact(Number(contact.id), contact);
    const messageContainer = renderMessage(
      `Contact ${contact.name} ${contact.surname} has been saved.`,
      'success',
    );

    stage.innerHTML = '';

    addMessage(messageContainer);
  }
});

// add contact
stage.addEventListener('submit', (event) => {
  const form = event.target;

  if (form.nodeName === 'FORM' && form.classList.contains('add-contact')) {
    event.preventDefault();

    const formData = new FormData(form);
    const contact = {};
    const entries = formData.entries();
    let currentEntry = entries.next();

    while (currentEntry.done === false) {
      const [key, value] = currentEntry.value;
      contact[key] = value;

      currentEntry = entries.next();
    }
    // make sure id is a number
    contact.id = contacts.length + 1;

    addContact(contact);

    const messageContainer = renderMessage(
      `Contact ${contact.name} ${contact.surname} saved.`,
      'success',
    );

    stage.innerHTML = '';

    addMessage(messageContainer);
  }
});

// display add pet
stage.addEventListener('click', (event) => {
  const button = event.target;

  if (
    button.nodeName === 'BUTTON' &&
    button.classList.contains('add-pet-button')
  ) {
    stage.innerHTML = '';
    stage.append(renderAddPetForm(Number(button.dataset.contactId)));
  }
});

// add pet
stage.addEventListener('submit', (event) => {
  const form = event.target;

  if (form.nodeName === 'FORM' && form.classList.contains('add-pet')) {
    event.preventDefault();

    const formData = new FormData(form);
    const pet = {};
    const entries = formData.entries();
    let currentEntry = entries.next();

    while (currentEntry.done === false) {
      const [key, value] = currentEntry.value;
      pet[key] = value;

      currentEntry = entries.next();
    }
    // get contact id
    const contactId = Number(pet.contactId);
    const contact = getContact(contactId);
    delete pet.contactId;

    contact.pets = contact.pets || [];

    // make sure id is a number
    pet.id = contact.pets.length + 1;

    addPet(contactId, pet);

    const messageContainer = renderMessage(
      `Pet ${pet.name} has been added to contact ${contact.name} ${contact.surname}.`,
      'success',
    );

    stage.innerHTML = '';

    addMessage(messageContainer);
  }
});

// delete pet
stage.addEventListener('click', (event) => {
  const button = event.target;

  if (button.nodeName === 'BUTTON' && button.classList.contains('delete-pet')) {
    const contactId = button.dataset.contactId;
    const petId = button.dataset.petId;
    deletePet(Number(contactId), Number(petId));

    const contactContainer = button.closest('.contact');
    contactContainer.remove();

    const messageContainer = renderMessage(`Pet removed.`, 'success');

    addMessage(messageContainer);
  }
});

// edit pet button
stage.addEventListener('click', (event) => {
  const button = event.target;

  if (button.nodeName === 'BUTTON' && button.classList.contains('edit-pet')) {
    const contactId = Number(button.dataset.contactId);
    const petId = Number(button.dataset.petId);
    const pet = getPet(contactId, petId);

    if (!pet) {
      return;
    }

    stage.innerHTML = '';

    stage.append(renderEditPet(contactId, pet));
  }
});

// edit pet
stage.addEventListener('submit', (event) => {
  const form = event.target;

  if (form.nodeName === 'FORM' && form.classList.contains('edit-pet')) {
    event.preventDefault();

    const formData = new FormData(form);
    const pet = {};
    const entries = formData.entries();
    let currentEntry = entries.next();

    while (currentEntry.done === false) {
      const [key, value] = currentEntry.value;
      pet[key] = value;

      currentEntry = entries.next();
    }
    // get contact id
    const contactId = Number(pet.contactId);
    const contact = getContact(contactId);
    delete pet.contactId;

    contact.pets = contact.pets || [];

    // make sure id is a number
    pet.id = contact.pets.length + 1;

    addPet(contactId, pet);

    const messageContainer = renderMessage(
      `${contact.name}'s pet, ${pet.name} has been saved.`,
      'success',
    );

    stage.innerHTML = '';

    stage.append(messageContainer);
  }
});

export default stage;
