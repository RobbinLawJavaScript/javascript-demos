// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event

// https://javascript.plainenglish.io/how-to-append-html-to-a-container-element-without-setting-innerhtml-with-javascript-21ecc9adf3d4

// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

export function Demo(){

const form = document.querySelector("#form")
const list = document.querySelector("#list")

// The 'input' event listener will fire
// when any input element is changed.
// The one element that has changed will be
// the target.
form.addEventListener("input", (e) => {
	console.log(`INPUT ${e.target.id} Value: ${e.target.value}`)
	validate(e.target)
})

const validate = (element) => {
	let valid = true
	let val
	if (element.id === 'text'){
		val = element.value.trim()
		if (val.length === 0 || val.length > 5)
			valid = false
	}
	if (element.id === 'select'){
		val = element.value
		if (val.length === 0)
			valid = false
	}
	if (valid === false)
		element.classList.add("is-invalid")
	else
		element.classList.remove("is-invalid")	
	return valid
}

// The 'submit' event listener will validate all input
// elements and select elements when the submit button is pressed.
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
	let text = e.target.elements["text-name"]
	let select = e.target.elements["select-name"]
	console.log(`SUBMIT text Value: ${text.value}, select Value: ${select.value}`)
	let isValidText = validate(text)
	let isValidSelect = validate(select)
	if (isValidText && isValidSelect) {
		addItemToList(text.value.trim(), select.value, list)
		form.reset()
		text.focus()
	}
})

const addItemToList = (textVal, selectVal, list) => {
	let newItem = 
	`
	<div class="mb-1 list-group-item">
		<p>Hey ${textVal}, your reason is: ${selectVal}</p>
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