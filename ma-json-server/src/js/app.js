import HTTPServices from './http.js';
import UI from './ui.js';

const httpServices = new HTTPServices();
const ui = new UI();

document.addEventListener('DOMContentLoaded', getItems);
document.querySelector('#form').addEventListener('click', submit);
document.querySelector('#list').addEventListener('click', setupForEditOrDelete);

ui.changeFormState('add');

function getItems() {
  httpServices.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err));
}

function submit(e) {
  const {title, body, id} = ui.getFormData();
  const data = {
    title,
    body
  }
  if(e.target.classList.contains('submit')) {
    if(title === '' || body === '') {
      ui.showAlert('Please fill in all fields', 'alert alert-danger');
    } 
    else {
      httpServices.post('http://localhost:3000/posts', data)
      .then(data => {
        ui.showAlert('Post added', 'alert alert-success');
        ui.clearFields();
        getPosts();
      })
      .catch(err => console.log(err));
    } 
  } 
  else if(e.target.classList.contains('edit')) {
    httpServices.put(`http://localhost:3000/posts/${id}`, data)
    .then(data => {
      ui.showAlert('Post updated', 'alert alert-success');
      ui.changeFormState('add');
      ui.clearFields();
      getPosts();
    })
    .catch(err => console.log(err));
  } 
  else if(e.target.classList.contains('delete')) {
    httpServices.delete(`http://localhost:3000/posts/${id}`)
    .then(data => {
      ui.showAlert('Post removed', 'alert alert-success');
      ui.changeFormState('add');
      ui.clearFields();
      getPosts();
    })
    .catch(err => console.log(err));
  }
  else if(e.target.classList.contains('cancel')) {
    ui.changeFormState('add');
    ui.clearFields();
  }
}

function setupForEditOrDelete(e) {
  const id = e.target.parentElement.dataset.id;
  const title = e.target.parentElement.parentElement.children[0].textContent;
  const body = e.target.parentElement.parentElement.children[1].textContent;
  const data = {
    id,
    title,
    body
  }
  ui.fillFormData(data);
  if(e.target.parentElement.classList.contains('edit')) {
    ui.changeFormState('edit');
  }
  else if (e.target.parentElement.classList.contains('delete')) {
    ui.changeFormState('delete');
  }
  e.preventDefault();
}