export function Run(){

	const form = document.querySelector("#form")
	
	form.addEventListener("submit", e => {
		e.preventDefault();    
		let text = getUserValues(e);
		text = text.trim();
		let {message, isNotValid} = validateUserValues(text);
		if(isNotValid){
			showAlert(message, 'error');
		} else {
			AddItemToList(text);
			showAlert('Item Added to List!', 'success');
			clearUserValues(e);
		}
	});
	
	function getUserValues(e){
		let text = e.target.elements["textName"].value;
		return text;
	}
	
	function validateUserValues(text){
		let message = '';
		let isNotValid = true;
		if(text === '')
			message += `| Text Empty |`;
		if(message != '')
			message = `Invalid Data: ` + message;
		else isNotValid = false;
		return {message, isNotValid};
	}
	
	function showAlert(message, className) {
		if(message != ''){
			const parentDiv = document.querySelector('#alert');
			const alertElement = 
			`
			<div class='${className} form-control'>
				${message}
			</div>
			`
			parentDiv.innerHTML = alertElement;
		}
	}
	
	function AddItemToList(text) {
		let list = document.querySelector("#list")
		let newItem = 
		`
			<p>#${text}</p>
		`
		list.innerHTML =  newItem + list.innerHTML;
	}
	
	function clearUserValues(e) {
		e.target.elements["textName"].value = '';
	}
	
	}