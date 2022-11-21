import HTTPServices from './http.js';
import UI from './ui.js';

const httpServices = new HTTPServices();
const ui = new UI();

document.addEventListener('DOMContentLoaded', getItems);
document.querySelector('#form').addEventListener('click', submitForm);
document.querySelector('#items').addEventListener('click', setupForEditOrDelete);

ui.changeFormState('add');

function getItems() {
  httpServices.get('http://localhost:3000/items')
  .then(data => {
    console.log(`.then now running`);
    ui.showItems(data);
  })
  .catch(err => console.log(err));
  console.log(`keep running asyncronously`);
}

function submitForm(e) {
  const {title, description, id} = ui.getFormData();
  const data = {
    title,
    description
  }
  if(e.target.classList.contains('add')) {
    let {errorMessage, dataIsValid} = ui.validateFormData(title, description);
    if(dataIsValid) {
      httpServices.post('http://localhost:3000/items', data)
      .then(data => {
        console.log(`Post Data returned: ${data}`);
        ui.showAlert('Job Added', 'success-message');
        ui.clearFormData();
        getItems();
      })
      .catch(err => console.log(err));
    } 
    else
    {
      ui.showAlert(errorMessage, 'error-message');
    }
  } 
  else if(e.target.classList.contains('edit')) {
    let {errorMessage, dataIsValid} = ui.validateFormData(title, description);
    if(dataIsValid) {
      httpServices.put(`http://localhost:3000/items/${id}`, data)
      .then(data => {
        ui.showAlert('Job Updated', 'success-message');
        ui.changeFormState('add');
        ui.clearFormData();
        getItems();
      })
      .catch(err => console.log(err));
    }
    else 
    {
      ui.showAlert(errorMessage, 'error-message');
    }
  } 
  else if(e.target.classList.contains('delete')) {
    httpServices.delete(`http://localhost:3000/items/${id}`)
    .then(data => {
      ui.showAlert('Job Deleted', 'success-message');
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
  if(e.target.parentElement.classList.contains('edit') || e.target.parentElement.classList.contains('delete')){
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
  }
}