// The target of the submit event object is the 'form'
// element itself and its children.
// You can submit the form by
// either pressing <enter> or clicking the submit
// button.
// e.target will give access to the form.

// The elements property of e.target (e.g. e.target.elements) gives access
// to the elements in the form (e.g. input, select, and button).
// You can use either .validName access to the name (if it's a valid name)
// or ['invalid-name'] for names that do not 
// adhere to JavaScript naming conventions. In JavaScript an invalid name
// would have a dash (e.g. -) in it.

export function Demo(){

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let textElement = e.target.elements["first-name"];
	let selectElement = e.target.elements["drop-down"];
	let textValue = textElement.value;
	let selectValue = selectElement.value;    

	let isFormValid = true;
	// validate the first name element
	if (isValueEmpty(textValue)) {
		isFormValid = false;
		textElement.classList.add("is-invalid");
	} else {
		textElement.classList.remove("is-invalid");	
	}
	// validate the contact reason element
	if (isValueEmpty(selectValue)) {
		isFormValid = false;
		selectElement.classList.add("is-invalid");
	} else {
		selectElement.classList.remove("is-invalid");	
	}
	// if both are valid then add to the list
	if (isFormValid) {
		addItemToList(textValue, selectValue);
		textElement.value = "";
		selectElement.value = "";
	}
});

const isValueEmpty = (value) => {
	if (value.trim() === "") {
		return true;
	}
	return false;
}

function addItemToList(text, select) {
	let list = document.querySelector("#list");
	let newItem = 
	`
	<div class="mb-3">
		<p>Hey ${text}, your reason is: ${select}</p>
	</div>
	`;
	// Add newItem to the beginning of the list.
	list.innerHTML =  newItem + list.innerHTML;
	// Add newItem to the end of the list.
	//list.innerHTML =  list.innerHTML + newItem;
}
}