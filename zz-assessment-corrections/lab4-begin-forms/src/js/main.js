// Regular Expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

// This code is not complete.
// Under each comment write code to satisfy the specs.

let form = document.querySelector(".new-user-form")
let list = document.querySelector(".new-users-list")

form.addEventListener("submit", (event)=> {
	event.preventDefault()
	
	// get the form elements
	
	// get the form elements values
	

	let isFormValid = true

	// validate the username elements
	// see docs above on regular expressions
	// This checks for spaces between letters.
	if (!(/\s/).test(username) && username !== '') {
		// This is the valid part.
	} else {
		// This is the invalid part.
	}

	// validate the city
	if (!(/\s/).test(city) && city !== '') {
		// This is the valid part.
	} else {
		// This is the invalid part.
	}

	// validate the province
	if (province !== '') {
		
	} else {
		
	}

	if (isFormValid) {
		// add user to list
		
		// reset the element values
		
	}
})

const addUser = (username, city, province, list) => {
	let newItem = 
	`
	<li class="list-group-item d-flex justify-content-between align-items-start">
		<div class="ms-2 me-auto">
			<div class="fw-bold">${username}</div>
			${city}, ${province}
		</div>
	</li>
	`
	list.insertAdjacentHTML('beforeend', newItem)
}