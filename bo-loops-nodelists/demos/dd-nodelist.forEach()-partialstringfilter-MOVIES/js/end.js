//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

export function End(){

	const movieFilterForm = document.querySelector("#movie-filter-form");
	movieFilterForm.elements["filter-query"].focus();

	const allMovieItems = document.querySelectorAll(".top-movies-list li");
	console.log(allMovieItems);

	movieFilterForm.addEventListener("submit", (e) => {
		e.preventDefault();
		let filter = e.target.elements["filter-query"].value;
		console.log(`Entered Value: ${filter}`);
		filterItems(filter);
	});

	const filterItems = (filterValue) => {
		allMovieItems.forEach((movieItem) => {
			if (movieItem.innerText.toLowerCase().includes(filterValue.toLowerCase())) {
				movieItem.classList.remove("hidden-item");           
			} else {
				movieItem.classList.add("hidden-item");
			}
		});
	}

}
