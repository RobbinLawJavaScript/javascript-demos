// https://getbootstrap.com/docs/5.0/components/list-group/

export function demo() {

const listGroup = document.querySelector('.list-group');

// add a mouse over link to the entire list
listGroup.addEventListener("mouseover", (event)=> {
	console.log(event.target)
	// add active to the class.
	event.target.classList.add("active")
});

// add an event listener on mouse out that removes the active class
listGroup.addEventListener("mouseout", (event)=> {
	console.log(event.target)
	// remove active from the class.
	event.target.classList.remove("active")
});

// add an event listener that will get the href.
// and open it using window.open(link). 
listGroup.addEventListener("click", (event)=> {
	event.preventDefault()
	let link = event.target.href
	window.open(link)
});

}