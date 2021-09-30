export const render = (contactId, { name, species, age, id }) => {
  const petContainer = document.createElement('article');
  petContainer.classList.add('pet', 'mt-3');

  const heading = document.createElement('h1');
  heading.textContent = name;

  const information = document.createElement('ul');
  const nameLi = document.createElement('li');
  const ageLi = document.createElement('li');
  const speciesLi = document.createElement('li');
  nameLi.textContent = `Name: ${name}`;
  ageLi.textContent = `Age: ${age}`;
  speciesLi.textContent = `Species: ${species}`;

  information.append(nameLi);
  information.append(speciesLi);
  information.append(ageLi);

  const deleteButton = document.createElement('button');
  deleteButton.dataset.petId = id;
  deleteButton.dataset.contactId = contactId;
  deleteButton.classList.add('delete-pet', 'btn' ,'btn-secondary');
  deleteButton.type = 'button';
  deleteButton.textContent = 'Delete';

  const editButton = document.createElement('button');
  editButton.dataset.petId = id;
  editButton.dataset.contactId = contactId;
  editButton.classList.add('edit-pet', 'btn' ,'btn-secondary', 'me-2');
  editButton.type = 'button';
  editButton.textContent = 'Edit';

  petContainer.append(heading);
  petContainer.append(information);
  petContainer.append(editButton);
  petContainer.append(deleteButton);

  return petContainer;
};
