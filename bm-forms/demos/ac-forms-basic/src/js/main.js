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

// https://javascript.plainenglish.io/how-to-append-html-to-a-container-element-without-setting-innerhtml-with-javascript-21ecc9adf3d4

// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

export function Demo(){

	const form = document.querySelector("#form")
	const list = document.querySelector("#list")

	form.addEventListener("submit", (e) => {
		e.preventDefault()
		console.log(`Event Object: ${e}`)
		let textElement = e.target.elements["first-name"]
		console.log(`textElement: ${textElement}, textElement Value: ${textElement.value}`)
		let selectElement = e.target.elements["drop-down"]
		console.log(`selectElement: ${selectElement}, selectElement Value: ${selectElement.value}`)

		let isValidForm = validateForm(textElement, selectElement)
		if (isValidForm) {
			addItemToList(textElement.value.trim(), selectElement.value, list)
			form.reset()
			textElement.focus()
		}
	})

	const validateForm = (textElement, selectElement) => {
		let valid = true
		if (textElement.value.trim().length === 0) {
			valid = false
			textElement.classList.add("is-invalid")
		} else {
			textElement.classList.remove("is-invalid")	
		}
		if (selectElement.value.trim().length === 0) {
			valid = false
			selectElement.classList.add("is-invalid")
		} else {
			selectElement.classList.remove("is-invalid")	
		}
		return valid
	}

	const addItemToList = (text, select, list) => {
		let newItem = 
		`
		<div class="mb-3">
			<p>Hey ${text}, your reason is: ${select}</p>
		</div>
		`
		// .insertAdjacentHTML() has two parameters:
		// a position (four possible, see docs),
		// and a text string that is parsed into html.
		// list.insertAdjacentHTML('beforeend', '<div>hello world</div>');
		
		// Add newItem to the beginning of the list.
		list.insertAdjacentHTML('afterbegin', newItem);
		// Alternative way but has bad consequences, and is slow, don't use.
		//list.innerHTML =  newItem + list.innerHTML;

		// Add newItem to the end of the list.
		//list.insertAdjacentHTML('beforeend', newItem);
		// Alternative way but has bad consequences, and is slow, don't use.
		//list.innerHTML =  list.innerHTML + newItem;
	}

	// This 'input' event listener will validate the form
	// every time there is an input of any kind in
	// either element.
	// Buy we still need the 'submit' event listener
	// to check things when we press the submit button.
	form.addEventListener("input", (e) => {
		let textElement = form.elements["first-name"]
		let selectElement = form.elements["drop-down"]
		validateForm(textElement, selectElement)
	})
}