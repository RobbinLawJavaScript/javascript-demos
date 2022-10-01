export function Run(){

	const form = document.querySelector("#form")
	
	form.addEventListener("submit", e => {
		e.preventDefault();
		let textElement = e.target.elements["text-name"];
		let text = textElement.value;
		//TODO: Add code here to trim the entered text.
		
		let isFormValid = true;
		//TODO: validate the text name element as per specs
		
		if (isFormValid) {
			addItemToList(text);
			textElement.value = "";
		}
	});
	
	const isValueNotEmpty = (value) => {
		if (value !== "") {
			return true;
		}
		return false;
	}

	function addItemToList(text) {
		let list = document.querySelector("#list")
		let newItem = 
		`
			<p>#${text}</p>
		`
		list.innerHTML =  newItem + list.innerHTML;
	}
	}