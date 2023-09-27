// https://getbootstrap.com/docs/5.0/components/list-group/

export default function Demo() {

const listGroup = document.querySelector('.list-group');

// add a mouse over link to the entire list
// This demonstrates the use of a anonymous arrow function.
listGroup.addEventListener("mouseover", (event) => {
	console.log(`mouseover target: ${event.target}`)
	// add active to the class.
	event.target.classList.add("active")
});

// add an event listener on mouse out that removes the active class
listGroup.addEventListener("mouseout", (event)=> {
	console.log(`mouseout target: ${event.target}`)
	// remove active from the class.
	event.target.classList.remove("active")
});

}