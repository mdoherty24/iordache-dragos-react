export const render = (contact) => {
  const editContactContainer = document.createElement('div');
  const { name, surname, email, phone, id } = contact;

  editContactContainer.innerHTML = `
    <form class="edit-contact">
      <h4>
        Editing contact ${name} ${surname} (id: ${id}).
      </h4>
      <label class="form-label mt-2">Name</label>
      <input type="text" name="name" class="form-control form-control-sm" value="${name}">

      <label class="form-label mt-3">Surname</label>
      <input type="text" name="surname" class="form-control form-control-sm" value="${surname}">

      <label class="form-label mt-3">Phone</label>
      <input type="tel" name="phone" class="form-control form-control-sm" value="${phone}">

      <label class="form-label mt-3">Email</label>
      <input type="email" name="email" class="form-control form-control-sm mb-3" value="${email}">

      <input type="hidden" name="id" value=${id}>

      <button type="submit" class="btn btn-secondary me-1">Save</button>
      <button type="button" class="cancel-button btn btn-secondary">Cancel</button>
    </form>
  `;

  return editContactContainer;
};
