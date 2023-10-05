export default function Run(){

	const form = document.querySelector("#form")
	const list = document.querySelector("#list")
	
	form.addEventListener("input", (e) => {
		if (e.target.id === 'text-id'){
			console.log(`INPUT text Value: ${e.target.value}`)
			validate('text', e.target)
		}
	})

	const validate = (elementType, element) => {
		let valid = true
		//TODO: Add code here to trim the entered text.
		let text = element.value.trim()
		//TODO: validate the text name element as per specs
		if ((text.length === 0) || (text.length > 10))
			valid = false
		if(valid === false)
			element.classList.add("is-invalid")
		else
			element.classList.remove("is-invalid")	
		return valid
	}

	form.addEventListener("submit", (e) => {
		e.preventDefault()
		let textElement = e.target.elements["text-name"]
		let isTextValid = validate('text', textElement)
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