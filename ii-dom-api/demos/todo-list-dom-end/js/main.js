// Add the required JavaScript to handle form submit and add a new todo item to 
// the page (in the div.todo-list element).  You will need to use a counter to 
// uniquely identify each todo item and use only DOM API functions to interact
// with the document (i.e. create each todo item), DO NOT use innerHTML for this
// exercise.

// required vars
let todoList = document.querySelector('.todo-list');
let todoCount = 0;

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-form').addEventListener('submit', function (evt) {
  // variables for creating the DOM fragment
  let div,
  checkbox,
  label,
  labelText,
  todoText;

  todoText = evt.target.elements['todo-item'].value;

  // adding a new todo so increment todoCount.
	todoCount += 1;
	
  // check for empty input value
	if (todoText === '') {
		todoText = 'Todo ' + (todoCount);
	}

  // create the required elements
  div = document.createElement('div');
  checkbox = document.createElement('input');
  label = document.createElement('label');
  labelText = document.createTextNode(todoText);

  // set the required attributes
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', 'todo-' + (todoCount));
  label.setAttribute('for', 'todo-' + (todoCount));
  label.setAttribute('contenteditable', '');

  // build the DOM fragment
  label.appendChild(labelText);
  div.appendChild(checkbox);
  div.appendChild(label);

  // add the document fragment to the document
  todoList.appendChild(div);

  // clear the input textbox
  evt.target.reset();

  // don't actually submit
  evt.preventDefault();
});