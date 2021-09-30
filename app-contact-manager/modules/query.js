import { contacts } from './data.js';

export const findContact = (needle = 'query') => {
  return contacts.filter((contact) => {
    const values = Object.values(contact);

    const haystack = values.reduce((string, value) => {
      if (typeof value === 'string') {
        // omit tolowercase initially
        string += value.toLowerCase();
      }

      return string;
    }, '');

    if (haystack.includes(needle)) {
      return true;
    }

    return false;
  });
};

export const getContact = (contactId) => {
  return contacts.find(({ id }) => {
    return id === contactId;
  });
};

export const addContact = (contact) => {
  contacts.push(contact);
};

export const editContact = (contactId, data) => {
  const contact = getContact(contactId);

  if (!contact) {
    return false;
  }
  // make sure you keep the pets
  data.pets = contact.pets;

  // contact must be mutated
  const contactProperties = Object.keys(contact);

  for (let i = 0; i < contactProperties.length; i++) {
    const property = contactProperties[i];
    contact[property] = data[property];
  }

  // make sure id is a number
  contact.id = contactId;
};

export const deleteContact = (contactId) => {
  let contactIndex = -1;

  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];

    if (contact.id === contactId) {
      contactIndex = i;
    }
  }

  if (contactIndex >= 0) {
    contacts.splice(contactIndex, 1);
  }
};

export const addPet = (contactId, pet) => {
  const contact = getContact(contactId);
  // make sure pets are there
  contact.pets = contact.pets || [];
  contact.pets.push(pet);
};

export const getPet = (contactId, petId) => {
  const contact = getContact(contactId);

  return contact.pets.find((pet) => {
    return pet.id === petId;
  });
};

export const deletePet = (contactId, petId) => {
  const { pets } = getContact(contactId);
  let petIndex = -1;

  for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];

    if (pet.id === petId) {
      petIndex = i;
    }
  }

  if (petIndex >= 0) {
    pets.splice(petIndex, 1);
  }
};
