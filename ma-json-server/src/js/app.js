import EasyHTTP from './http.js';
import UI from './ui.js';

const http = new EasyHTTP();
const ui = new UI();

document.addEventListener('DOMContentLoaded', getPosts);
document.querySelector('.card-form').addEventListener('click', submitPost);
document.querySelector('#posts').addEventListener('click', enableEdit);

ui.changeFormState('add');

function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

function submitPost(e) {
  const {title, body, id} = ui.getFormData();
  const data = {
    title,
    body
  }
  if(e.target.classList.contains('post-submit')) {
    if(title === '' || body === '') {
      ui.showAlert('Please fill in all fields', 'alert alert-danger');
    } 
    else {
      http.post('http://localhost:3000/posts', data)
      .then(data => {
        ui.showAlert('Post added', 'alert alert-success');
        ui.clearFields();
        getPosts();
      })
      .catch(err => console.log(err));
    } 
  } 
  else if(e.target.classList.contains('post-edit')) {
    http.put(`http://localhost:3000/posts/${id}`, data)
    .then(data => {
      ui.showAlert('Post updated', 'alert alert-success');
      ui.changeFormState('add');
      ui.clearFields();
      getPosts();
    })
    .catch(err => console.log(err));
  } 
  else if(e.target.classList.contains('post-delete')) {
    http.delete(`http://localhost:3000/posts/${id}`)
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

function enableEdit(e) {
  const id = e.target.parentElement.dataset.id;
  const title = e.target.parentElement.parentElement.children[0].textContent;
  console.log(title);
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