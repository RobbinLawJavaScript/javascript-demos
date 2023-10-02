export default function Run(){

	const form = document.querySelector("#form")
	const list = document.querySelector("#list")
	
	form.addEventListener("submit", (e) => {
		e.preventDefault()
		let textElement = e.target.elements["text-name"]
		let text = textElement.value
		//TODO: Add code here to trim the entered text.
		
		let isFormValid = true
		//TODO: validate the text name element as per specs
		
		if (isFormValid) {
			addItemToList(text, list)
			form.reset()
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