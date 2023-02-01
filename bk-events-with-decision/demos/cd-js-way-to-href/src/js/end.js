// https://getbootstrap.com/docs/5.0/components/list-group/

// https://developer.mozilla.org/en-US/docs/Web/API/Window/open

export default function Demo() {

const listGroup = document.querySelector('.list-group');

// add an event listener that will get the href.
// and open it using window.open(link). 
listGroup.addEventListener("mouseover", (event)=> {
	//event.preventDefault();
	let link = event.target.href;
	window.open(link);
});

}