export default function Run(){

	const form = document.querySelector("#form")
	const list = document.querySelector("#list")
	
	form.addEventListener("input", (e) => {
		console.log(`INPUT ${e.target.id} Value: ${e.target.value}`)
		validate(e.target)
	})

	const validate = (element) => {
		let valid = true
		let val
		if (element.id === 'text'){
			//TODO: Add code here to trim the entered text.
			val = element.value.trim()
			//TODO: Validate the text element as per HTML messages
			if (val.length === 0 || val.length > 10)
				valid = false
		}
		if(valid === false)
			element.classList.add("is-invalid")
		else
			element.classList.remove("is-invalid")	
		return valid
	}

	form.addEventListener("submit", (e) => {
		e.preventDefault()
		let text = e.target.elements["text-name"]
		let isTextValid = validate(text)
		if (isTextValid) {
			addItemToList(text.value.trim(), list)
			form.reset()
		}
	});

	function addItemToList(textVal, list) {
		let newItem = 
		`
		<div class="mb-1 col-6 list-group-item">
			<p>#${textVal}</p>
		</div>
		`
		list.insertAdjacentHTML('afterbegin', newItem);
	}
	
}