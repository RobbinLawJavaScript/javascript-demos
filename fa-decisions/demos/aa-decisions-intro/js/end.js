export function demo() {
//TODO:
//With this code the hidden class is always removed, but
//what if we want to remove the hidden class IF it is present,
//otherwise, add it back!

// 1. select the target element
var featureImage = document.querySelector('img.feature');
// 2. add event listener
featureImage.addEventListener('click', handleFeatureClick);
// 3. create the event listener function or event handler.
function handleFeatureClick() {
	var desc = document.querySelector('p.feature.description');
	//TODO: Change the code here
	if (desc.classList.contains('hidden')) {
		desc.classList.remove('hidden');
	} else {
		desc.classList.add('hidden');
	}
}

}