class UI {
  constructor() {
    this.list = document.querySelector('#list');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.submit = document.querySelector('.submit');
    this.edit = document.querySelector('.edit');
    this.delete = document.querySelector('.delete');
    this.editCancel = document.querySelector('.edit-cancel');
    this.deleteCancel = document.querySelector('.delete-cancel');
    this.formState = 'add';
  }

  // Show all posts
  showPosts(posts) {
    let output = '';

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="fa fa-remove"></i>
            </a>
          </div>
        </div>
      `;
    });

    this.list.innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
    this.clearAlert();

    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.postsContainer');
    // Get posts
    const posts = document.querySelector('#posts');
    // Insert alert div
    container.insertBefore(div, posts);

    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 5000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if(currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }


  getFormData() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const id = document.querySelector('#id').value;
    return {title, body, id};
  }

  fillFormData(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;
  }

  clearIdInput() {
    this.idInput.value = '';
  }

  changeFormState(type) {
    this.submit.classList.add('hidden');
    this.edit.classList.add('hidden');
    this.delete.classList.add('hidden');
    this.editCancel.classList.add('hidden');
    this.deleteCancel.classList.add('hidden');
    if(type === 'add') {
      this.formState = 'add';
      this.submit.classList.remove('hidden');
    }
    else if (type === 'edit') {
      this.formState = 'edit';
      this.edit.classList.remove('hidden');
      this.editCancel.classList.remove('hidden');
    }
    else if (type === 'delete') {
      this.formState === 'delete';
      this.delete.classList.remove('hidden');
      this.deleteCancel.classList.remove('hidden');
    }
  }
}

export default UI;