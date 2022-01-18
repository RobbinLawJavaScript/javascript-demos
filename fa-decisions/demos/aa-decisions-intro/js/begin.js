export function demo() {
//TODO:
//With this code the hidden class is always removed, but
//what if we want to remove the hidden class IF it is present,
//otherwise, add it back!
	
// 1. select the target element
let featureImage = document.querySelector('img.feature');
// 2. add event listener
featureImage.addEventListener('click', handleFeatureClick);
// 3. create the event listener function or the event handler.
function handleFeatureClick() {
	let desc = document.querySelector('p.feature.description');
	//TODO: Change the code here
	desc.classList.remove('hidden');
}

}