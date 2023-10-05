// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event

// https://javascript.plainenglish.io/how-to-append-html-to-a-container-element-without-setting-innerhtml-with-javascript-21ecc9adf3d4

// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

export function Demo(){

	const form = document.querySelector("#form")
	const list = document.querySelector("#list")

	// This 'input' event listener will validate an 
	// input element every time there is an input change 
	// of any kind in either the text or select element.
	// Note that here we use the target.id to see which input
	// has been changed.
	form.addEventListener("input", (e) => {
		if (e.target.id === 'first-name-id'){
			console.log(`INPUT textElement Value: ${e.target.value}`)
			validateText(e.target)
		}
		if (e.target.id === 'drop-down-id'){
			console.log(`INPUT selectElement Value: ${e.target.value}`)
			validateSelect(e.target)
		}
	})

	const validateText = (textElement) => {
		let valid = true
		if (textElement.value.trim().length === 0) {
			valid = false
			textElement.classList.add("is-invalid")
		} else {
			textElement.classList.remove("is-invalid")	
		}
		return valid
	}

	const validateSelect = (selectElement) => {
		let valid = true
		if (selectElement.value.trim().length === 0) {
			valid = false
			selectElement.classList.add("is-invalid")
		} else {
			selectElement.classList.remove("is-invalid")	
		}
		return valid
	}

	// The 'submit' event listener will validate both
	// when the submit button is pressed.
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
	form.addEventListener("submit", (e) => {
		e.preventDefault()
		let textElement = e.target.elements["first-name"]
		console.log(`SUBMIT textElement Value: ${textElement.value}`)
		let selectElement = e.target.elements["drop-down"]
		console.log(`SUBMIT selectElement Value: ${selectElement.value}`)
		let isValidText = validateText(textElement)
		let isValidSelect = validateSelect(selectElement)
		if (isValidText && isValidSelect) {
			addItemToList(textElement.value.trim(), selectElement.value, list)
			form.reset()
			textElement.focus()
		}
	})

	const addItemToList = (text, select, list) => {
		let newItem = 
		`
		<div class="mb-1 list-group-item">
			<p>Hey ${text}, your reason is: ${select}</p>
		</div>
		`
		// .insertAdjacentHTML() has two parameters:
		// a position (four possible, see docs),
		// and a text string that is parsed into html.
		//list.insertAdjacentHTML('beforeend', '<div>hello world</div>');
		
		// Add newItem to the beginning of the list.
		list.insertAdjacentHTML('afterbegin', newItem);
		// Alternative way but has bad consequences, and is slow, don't use.
		//list.innerHTML =  newItem + list.innerHTML;

		// Add newItem to the end of the list.
		//list.insertAdjacentHTML('beforeend', newItem);
		// Alternative way but has bad consequences, and is slow, don't use.
		//list.innerHTML =  list.innerHTML + newItem;
	}
}