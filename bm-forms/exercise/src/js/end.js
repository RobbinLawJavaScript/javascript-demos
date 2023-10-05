export default function Run(){

	const form = document.querySelector("#form")
	const list = document.querySelector("#list")
	
	form.addEventListener("input", (e) => {
		if (e.target.id === 'text-id'){
			console.log(`INPUT textElement Value: ${e.target.value}`)
			validateText(e.target)
		}
	})

	const validateText = (textElement) => {
		let valid = true
		//TODO: Add code here to trim the entered text.
		let text = textElement.value.trim()
		//TODO: validate the text name element as per specs
		if ((text.length === 0) || (text.length > 10)) {
			valid = false
			textElement.classList.add("is-invalid")
		} else {
			textElement.classList.remove("is-invalid")	
		}
		return valid
	}

	form.addEventListener("submit", (e) => {
		e.preventDefault()
		let textElement = e.target.elements["text-name"]
		let isTextValid = validateText(textElement)
		if (isTextValid) {
			addItemToList(textElement.value.trim(), list)
			form.reset()
		}
	});

	function addItemToList(text, list) {
		let newItem = 
		`
		<div class="mb-1 col-6 list-group-item">
			<p>#${text}</p>
		</div>
		`
		list.insertAdjacentHTML('afterbegin', newItem);
	}
	
}