//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

function End(){

	let movieFilterForm = document.querySelector("#movie-filter-form")
	movieFilterForm.elements["filter-query"].focus()

	let allMovieItems = document.querySelectorAll(".top-movies-list li")
	console.log(allMovieItems);

	movieFilterForm.addEventListener("submit", evt => {
		evt.preventDefault();
		let filter = movieFilterForm.elements["filter-query"].value;
		console.log(filter);
		filterItems(filter);
	});

	const filterItems = filterValue => {
		allMovieItems.forEach(movieItem => {
			if (movieItem.innerText.toLowerCase().includes(filterValue.toLowerCase())) {
				movieItem.classList.remove("hidden-item");           
			} else {
				movieItem.classList.add("hidden-item");
			}
		});
	}

}

export default End;
