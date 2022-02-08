function End(){

let movieFilterForm = document.querySelector("#movie-filter-form")
movieFilterForm.elements["filter-query"].focus()

let allMovieItems = document.querySelectorAll(".top-movies-list li")

movieFilterForm.addEventListener("submit", evt => {
	evt.preventDefault()
	let filter = movieFilterForm.elements["filter-query"].value
	console.log(movieFilterForm.elements["filter-query"].value)
	filterItems(filter)
});

/*
We're going to check each item contains our search query
- if it's not then we're going to add the "hidden-item" class
- if does include it we're going to remove the "hidden-item" class.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

*/
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
