const createSearchedItem = (data) => {
	let newItem = 
	`
	<li class="list-group-item d-flex justify-content-between align-items-start">
		<div class="ms-2 me-auto">
			<div class="fw-bold">
				${data.name}
				<span class="badge bg-primary rounded-pill">${data.rating}</span>
			</div>
			<span>${data.category}</span>
		</div>
		<button type="button" class="btn btn-success add-button">Add to Favorites</button>
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
				<span class="badge bg-primary rounded-pill">${data.rating}</span>
			</div>
			<span>${data.category}</span>
		</div>
		<button type="button" class="btn btn-warning delete-button">Delete from Favorites</button>
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

export const showAlert = (element, delay) => {
	try{
		element.classList.remove('d-none')
		const interval = setTimeout(() => {
			console.warn(`timer timed out after ${delay/1000}`)
			element.classList.add('d-none')
		}, delay)
	}
	catch(error){
		console.error(`catch error: ${error}`)
	}
}