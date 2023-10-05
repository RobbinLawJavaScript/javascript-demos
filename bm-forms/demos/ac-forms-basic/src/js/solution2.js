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
		if (e.target.id === 'text-id'){
			console.log(`INPUT text (${typeof e.target.value}) Value: ${e.target.value}`)
			validate('text', e.target)
		}
		if (e.target.id === 'select-id'){
			console.log(`INPUT select (${typeof e.target.value}) Value: ${e.target.value}`)
			validate('select', e.target)
		}
	})

	const validate = (elementType, element) => {
		let valid = true
		let v
		if (elementType === 'text'){
			v = element.value.trim()
			if (v.length === 0 || v.length > 8)
				valid = false
		}
		if (elementType === 'select'){
			v = element.value
			if (v.length === 0)
				valid = false
		}
		if (valid === false)
			element.classList.add("is-invalid")
		else
			element.classList.remove("is-invalid")	
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
		let textElement = e.target.elements["text-name"]
		console.log(`SUBMIT text Value: ${textElement.value}`)
		let selectElement = e.target.elements["select-name"]
		console.log(`SUBMIT select Value: ${selectElement.value}`)
		let isValidText = validate('text', textElement)
		let isValidSelect = validate('select', selectElement)
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