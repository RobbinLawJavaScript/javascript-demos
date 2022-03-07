class UI {
  constructor() {
    this.list = document.querySelector('#list');
    this.titleInput = document.querySelector('#title');
    this.descriptionInput = document.querySelector('#description');
    this.idInput = document.querySelector('#id');
    this.submit = document.querySelector('.submit');
    this.edit = document.querySelector('.edit');
    this.delete = document.querySelector('.delete');
    this.editCancel = document.querySelector('.edit-cancel');
    this.deleteCancel = document.querySelector('.delete-cancel');
    this.formState = 'add';
  }


  dumby() {
    console.log('hi');
  }
  
  showItems(items) {
    let output = '';

    items.forEach((item) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${item.title}</h4>
            <p class="card-text">${item.description}</p>
            <a href="#" class="edit card-link" data-id="${item.id}">
              <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${item.id}">
              <i class="fa fa-remove"></i>
            </a>
          </div>
        </div>
      `;
    });

    this.list.innerHTML = output;
  }


  showAlert(message, className) {
    const parentDiv = document.querySelector('#alert');
    const alertElement = 
    `
    <div class='${className} form-control'>
      ${message}
    </div>
    `
    parentDiv.innerHTML = alertElement;
  }

  showAlerts(message, className) {
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
    const items = document.querySelector('#items');
    // Insert alert div
    container.insertBefore(div, items);

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

  clearFormData() {
    this.titleInput.value = '';
    this.descriptionInput.value = '';
  }


  getFormData() {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const id = document.querySelector('#id').value;
    return {title, description, id};
  }

  fillFormData(data) {
    this.titleInput.value = data.title;
    this.descriptionInput.value = data.description;
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