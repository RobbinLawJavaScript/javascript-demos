// The target of the submit event is the 'form'
// element itself (you can submit the form by
// either pressing <enter> or clicking the submit
// button).
// e.g. evt.target will give access to the form

// The elements property of a form element gives access
// to the form control elements in the form (e.g. input and button)
// You can use either .validName access to the name (if it's a valid name)
// or ['invalid-name'] for names that do not 
// adhere to JavaScript naming conventions. In JavaScript an invalid name
// would have a - in it. Don't use a - in any name but css classes.

export function demo(){

const form = document.querySelector("#frm");

form.addEventListener("submit", e => {
	e.preventDefault();
	let textElement = e.target.elements["first-name"];
	let selectElement = e.target.elements["drop-down"];
	let text = textElement.value;
	let select = selectElement.value;    

	let isFormValid = true;
	// validate the first name element
	if (!hasWhiteSpace(text) && isValueNotEmpty(text)) {
		textElement.classList.remove("is-invalid");
	} else {
		isFormValid = false;
		textElement.classList.add("is-invalid");
	}
	// validate the contact reason element
	if (isValueNotEmpty(select)) {
		selectElement.classList.remove("is-invalid");
	} else {
		isFormValid = false;
		selectElement.classList.add("is-invalid");
	}

	if (isFormValid) {
		addItemToList(text, select);
		// reset the values
		textElement.value = "";
		selectElement.value = "";
	}
});

const isValueNotEmpty = (value) => {
	if (value !== "") {
		return true;
	}
	return false;
}

function hasWhiteSpace(s) {
	return (/\s/).test(s);
}

function addItemToList(text, select) {
	let list = document.querySelector("#list");
	let newItem = 
	`
	<div class="mb-3">
		<p>Hey ${text}, your reason is: ${select}</p>
	</div>
	`;
	list.innerHTML =  newItem + list.innerHTML;
}
}