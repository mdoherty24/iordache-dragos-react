import { contacts } from './data.js';

export const findContact = (needle = 'query') => {
  return contacts.filter((contact) => {
    const values = Object.values(contact);
    //values [1, larry, larryson, ;]

    const haystack = values.reduce((string, value) => {
      if (typeof value === 'string') {
        string += value.toLowerCase();
      }

      return string;
    }, '');

    // haystack 'larrylarrysonlarry@yahoo.4141'
    if (haystack.includes(needle)) {
      return true;
    }

    return false;
  });
};
