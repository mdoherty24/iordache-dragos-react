import { getContact } from './query.js';

export const render = (contactId) => {
  const addPetContainer = document.createElement('div');
  const { name, surname } = getContact(contactId);

  addPetContainer.innerHTML = `
    <form class="add-pet">
      <h4>
        Add a new pet for ${name} ${surname}
      </h4>
      <label class="form-label mt-2">Name</label>
      <input type="text" name="name" class="form-control form-control-sm">

      <label class="form-label mt-3">Species</label>
      <input type="text" name="species" class="form-control form-control-sm">

      <label class="form-label mt-3">Age</label>
      <input type="number" name="age" class="form-control form-control-sm mb-3">

      <input type="hidden" name="contactId" value=${contactId}>

      <button type="submit" class="btn btn-secondary me-1">Save</button>
      <button type="button" class="cancel-button btn btn-secondary">Cancel</button>
    </form>
  `;

  return addPetContainer;
};
