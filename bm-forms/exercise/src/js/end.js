export default function Run(){

	const form = document.querySelector("#form")
	let list = document.querySelector("#list")
	
	form.addEventListener("submit", (e) => {
		e.preventDefault()
		let textElement = e.target.elements["text-name"]
		let text = textElement.value
		//TODO: Add code here to trim the entered text.
		text = text.trim()
		let isFormValid = true
		//TODO: validate the text name element as per specs
		if ((text === "") || (text.length > 10)) {
			// text is invalid
			isFormValid = false
			textElement.classList.add("is-invalid")
		} else {
			// text is valid
			textElement.classList.remove("is-invalid")
		}
		if (isFormValid) {
			addItemToList(text, list)
			textElement.value = ""
		}
	});

	function addItemToList(text, list) {
		let newItem = 
		`
			<p>#${text}</p>
		`
		list.insertAdjacentHTML('afterbegin', newItem);
	}
	
}