class UI {
  
  constructor() {
    this.items = document.querySelector('#items');
    this.titleInput = document.querySelector('#title');
    this.descriptionInput = document.querySelector('#description');
    this.idInput = document.querySelector('#id');
    this.add = document.querySelector('#add');
    this.edit = document.querySelector('#edit');
    this.editCancel = document.querySelector('#edit-cancel');
    this.delete = document.querySelector('#delete');
    this.deleteCancel = document.querySelector('#delete-cancel');
    this.alert = document.querySelector('#alert');
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
    this.items.innerHTML = output;
  }

  showAlert(message, className) {
    const alertElement = 
    `
    <div class="col">
    <p class="${className} btn btn-block">${message}</p> 
    </div>
    `
    this.alert.innerHTML = alertElement;
  }

  clearAlert() {
    const alertElement = 
    `
    <div class="col no-vis">
      <p class="btn btn-block">...</p> 
    </div>
    `
    this.alert.innerHTML = alertElement;
  }

  getFormData() {
    const title = this.titleInput.value;
    const description = this.descriptionInput.value;
    const id = this.idInput.value;
    return {title, description, id};
  }

  validateFormData(title, description){
    let errorMessage = '';
    let dataIsValid = false;
    if(title == '')
      errorMessage += `| Title |`;
    if(title.length > 50)
      errorMessage += `| Title > 50 |`;
    if(description == '')
      errorMessage += `| Description |`;
    if(errorMessage == '')
      dataIsValid = true;
    else
      errorMessage = `Invalid Data: ` + errorMessage;
    return {errorMessage, dataIsValid};
  }

  fillFormData(data) {
    this.titleInput.value = data.title;
    this.descriptionInput.value = data.description;
    this.idInput.value = data.id;
  }

  clearFormData() {
    this.titleInput.value = '';
    this.descriptionInput.value = '';
    this.idInput.value = '';
  }

  changeFormState(state) {
    this.add.classList.add('hidden');
    this.edit.classList.add('hidden');
    this.editCancel.classList.add('hidden');
    this.delete.classList.add('hidden');
    this.deleteCancel.classList.add('hidden');
    if(state === 'add') {
      this.add.classList.remove('hidden');
    }
    else if (state === 'edit') {
      this.edit.classList.remove('hidden');
      this.editCancel.classList.remove('hidden');
    }
    else if (state === 'delete') {
      this.delete.classList.remove('hidden');
      this.deleteCancel.classList.remove('hidden');
    }
  }
}

export default UI;