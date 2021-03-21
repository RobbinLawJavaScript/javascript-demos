// Add the required JavaScript to handle form submit and add a new todo item to 
// the page (in the div.todo-list element).  You will need to use a counter to 
// uniquely identify each todo item and use only DOM API functions to interact
// with the document (i.e. create each todo item), DO NOT use innerHTML for this
// exercise.

// required vars
var todos = document.querySelector('.todo-list');
var todoCount = 0;

//TODO: new global variables dn and up
// Unicode value of down arrow 
let dn = '\u21e9';
// Unicode value of up arrow
let up = '\u21e7';

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-frm').addEventListener('submit', function (evt) {
	// variables for creating the DOM fragment
	let div,
		checkbox,
		label,
		labelText,
		todoText,
		//TODO: New variables
        spanArrowUp,
        spanArrowDn;

	todoText = evt.target.elements['todo-item'].value;

	// adding a new todo so increment todoCount.
	todoCount += 1;
	
	// check for empty input value
	if (todoText === '') {
		todoText = 'Todo ' + (todoCount);
	}

	// create required elements
	div = document.createElement('div');
	checkbox = document.createElement('input');
	label = document.createElement('label');
	labelText = document.createTextNode(todoText);
    //TODO: Create the dn and up arrow spans, and TextNodes.
	spanArrowDn = document.createElement('span');
	spanArrowDnText = document.createTextNode(dn);
    spanArrowUp = document.createElement('span');
	spanArrowUpText = document.createTextNode(up);
    
	// set the required attributes
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', 'todo-' + todoCount);
	label.setAttribute('for', 'todo-' + todoCount);
	label.setAttribute('contenteditable', '');
    //TODO: Set up the class attribute for the spans.
    spanArrowUp.setAttribute('class', 'arrow up');
	spanArrowDn.setAttribute('class', 'arrow dn');

	// build document fragment
	label.appendChild(labelText);
	div.appendChild(checkbox);
	div.appendChild(label);
	//TODO: integrate the arrow spans into the document fragment
	spanArrowDn.appendChild(spanArrowDnText);
	div.appendChild(spanArrowDn);
	spanArrowUp.appendChild(spanArrowUpText);
	div.appendChild(spanArrowUp);
	
	// add the document fragment to the document
	todos.appendChild(div);

	// clear the input textbox
	evt.target.reset();

	// don't actually submit
	evt.preventDefault();
});


document.querySelector('.todo-list').addEventListener('click', function (evt) {
    // check for click on an arrow
    let targetTodo = evt.target.parentNode;
    let todoList = targetTodo.parentNode;
    let siblingTodo;
    if (evt.target.classList.contains('arrow')) {
        // identify the type of arrow (i.e. down or up)
        if (evt.target.classList.contains('dn')) {
            siblingTodo = targetTodo.nextElementSibling;
			if(siblingTodo != null){
				// insert the sibling before the target
				todoList.insertBefore(siblingTodo, targetTodo);
			}
        } else if (evt.target.classList.contains('up')) {
            siblingTodo = targetTodo.previousElementSibling;
			if(siblingTodo != null){
				// insert the sibling after the target
				todoList.insertBefore(targetTodo, siblingTodo);
			}
        }
    }
});