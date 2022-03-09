import HTTPServices from './http.js';
import UI from './ui.js';

const httpServices = new HTTPServices();
const ui = new UI();

document.addEventListener('DOMContentLoaded', getItems);
document.querySelector('#form').addEventListener('click', submitForm);
document.querySelector('#list').addEventListener('click', setupForEditOrDelete);

ui.changeFormState('add');

function getItems() {
  httpServices.get('http://localhost:3000/items')
  .then(data => {
    ui.showItems(data);
  })
  .catch(err => console.log(err));
}

function submitForm(e) {
  e.preventDefault();
  const {title, description, id} = ui.getFormData();
  const data = {
    title,
    description
  }
  if(e.target.classList.contains('add')) {
    if(title === '' || description === '') {
      ui.showAlert('Please fill in all fields', 'error');
    } 
    else {
      httpServices.post('http://localhost:3000/items', data)
      .then(data => {
        ui.showAlert('Item added', 'success');
        ui.clearFormData();
        getItems();
      })
      .catch(err => console.log(err));
    } 
  } 
  else if(e.target.classList.contains('edit')) {
    httpServices.put(`http://localhost:3000/items/${id}`, data)
    .then(data => {
      ui.showAlert('Item updated', 'success');
      ui.changeFormState('add');
      ui.clearFormData();
      getItems();
    })
    .catch(err => console.log(err));
  } 
  else if(e.target.classList.contains('delete')) {
    httpServices.delete(`http://localhost:3000/items/${id}`)
    .then(data => {
      ui.showAlert('Item removed', 'success');
      ui.changeFormState('add');
      ui.clearFormData();
      getItems();
    })
    .catch(err => console.log(err));
  }
  else if(e.target.classList.contains('cancel')) {
    ui.changeFormState('add');
    ui.clearFormData();
  }
}

function setupForEditOrDelete(e) {
  const id = e.target.parentElement.dataset.id;
  const title = e.target.parentElement.parentElement.children[0].textContent;
  const description = e.target.parentElement.parentElement.children[1].textContent;
  const data = {
    title,
    description,
    id
  }
  ui.fillFormData(data);
  ui.clearAlert();
  if(e.target.parentElement.classList.contains('edit')) {
    ui.changeFormState('edit');
  }
  else if (e.target.parentElement.classList.contains('delete')) {
    ui.changeFormState('delete');
  }
  //e.preventDefault();
}