class UI {
  constructor() {
    this.list = document.querySelector('#list');
    this.titleInput = document.querySelector('#title');
    this.descriptionInput = document.querySelector('#description');
    this.idInput = document.querySelector('#id');
    this.add = document.querySelector('.add');
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
            <h1 class="card-title"><strong>${item.title}</strong></h1>
            <h4 class="card-title">${item.description}</h4>
            <a href="#" class="card-link edit" data-id="${item.id}">
              <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="card-link delete" data-id="${item.id}">
              <i class="fa fa-remove"></i>
            </a>
          </div>
        </div>
      `;
    });

    this.list.innerHTML = output;
  }


  showAlert(message, className) {
    const alert = document.querySelector('#alert');
    const alertElement = 
    `
    <div class="col">
    <p class="${className} btn btn-block">${message}</p> 
    </div>
    `
    alert.innerHTML = alertElement;
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
    const alert = document.querySelector('#alert');
    const alertElement = 
    `
    <div class="col no-vis">
      <p class="btn btn-block"></p> 
    </div>
    `
    alert.innerHTML = alertElement;
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
    this.add.classList.add('hidden');
    this.edit.classList.add('hidden');
    this.delete.classList.add('hidden');
    this.editCancel.classList.add('hidden');
    this.deleteCancel.classList.add('hidden');
    if(type === 'add') {
      this.formState = 'add';
      this.add.classList.remove('hidden');
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