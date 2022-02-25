class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.postEdit = document.querySelector('.post-edit');
    this.postDelete = document.querySelector('.post-delete');
    this.postEditCancel = document.querySelector('.post-edit-cancel');
    this.postDeleteCancel = document.querySelector('.post-delete-cancel');
    this.formState = 'add';
  }

  // Show all posts
  showPosts(posts) {
    let output = '';

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 name="h4" class="card-title">${post.title}</h4>
            <p name="p" class="card-text">${post.body}</p>
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

    this.post.innerHTML = output;
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
    this.postSubmit.classList.add('hidden');
    this.postEdit.classList.add('hidden');
    this.postDelete.classList.add('hidden');
    this.postEditCancel.classList.add('hidden');
    this.postDeleteCancel.classList.add('hidden');
    if(type === 'add') {
      this.formState = 'add';
      this.postSubmit.classList.remove('hidden');
    }
    else if (type === 'edit') {
      this.formState = 'edit';
      this.postEdit.classList.remove('hidden');
      this.postEditCancel.classList.remove('hidden');
    }
    else if (type === 'delete') {
      this.formState === 'delete';
      this.postDelete.classList.remove('hidden');
      this.postDeleteCancel.classList.remove('hidden');
    }
  }
}

export default UI;