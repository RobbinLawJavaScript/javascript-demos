const createSearchedItem = (data) => {
	let newItem = 
	`
	<li class="list-group-item d-flex justify-content-between align-items-start">
		<div class="ms-2 me-auto">
			<div class="fw-bold">
				${data.name}
				<span class="badge bg-dark rounded-pill">${data.rating}</span>
			</div>
			<span>${data.category}</span>
		</div>
		<div class="mx-4 btn error-or-success-text-color no-vis">
    </div>
		<button type="button" class="btn btn-dark add-button">Add to Favorites</button>
	</li>
	`
	return newItem
}

const createFavoritesItem = (data) => {
	let newItem = 
	`
	<li class="list-group-item d-flex justify-content-between align-items-start">
		<div class="ms-2 me-auto">
			<div class="fw-bold">
				${data.name}
				<span class="badge bg-dark rounded-pill">${data.rating}</span>
			</div>
			<span>${data.category}</span>
		</div>
		<button type="button" class="btn btn-dark delete-button">Delete from Favorites</button>
	</li>
	`
	return newItem
}

export const renderData = (type, myArray, list) => {
	list.replaceChildren()
	myArray.forEach((item) => {
		let listItem
		if(type == "searched"){
			listItem = createSearchedItem(item)
		}
		if(type == "favorites"){
			listItem = createFavoritesItem(item)
		}
		list.insertAdjacentHTML('beforeend', listItem)
	})
}

export const showAlert = (element, type, message, delay) => {
	try{
		element.classList.add(type)
		element.innerText = message
		element.classList.remove('no-vis')
		const interval = setTimeout(() => {
			element.classList.add('no-vis')
			element.classList.remove(type)
		}, delay)
	}
	catch(error){
		console.error(`catch error: ${error}`)
	}
}