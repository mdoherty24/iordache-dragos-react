export const render = () => {
  const addContactContainer = document.createElement('div');

  addContactContainer.innerHTML = `
    <form class="add-contact">
      <h4>
        Add new contact.
      </h4>
      <label class="form-label mt-2">Name</label>
      <input type="text" name="name" class="form-control form-control-sm">

      <label class="form-label mt-3">Surname</label>
      <input type="text" name="surname" class="form-control form-control-sm">

      <label class="form-label mt-3">Phone</label>
      <input type="tel" name="phone" class="form-control form-control-sm">

      <label class="form-label mt-3">Email</label>
      <input type="email" name="email" class="form-control form-control-sm mb-3">

      <input type="hidden" name="id">

      <button type="submit" class="btn btn-secondary me-1">Save</button>
      <button type="button" class="cancel-button btn btn-secondary">Cancel</button>
    </form>
  `;

  return addContactContainer;
};
