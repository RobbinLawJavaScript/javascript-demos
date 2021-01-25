// 1. select the target element
var featureImage = document.querySelector('img.feature');
// 2. add event listener
featureImage.addEventListener('click', handleFeatureClick);
// 3. create the event listener function
function handleFeatureClick() {
	var desc = document.querySelector('p.feature.description');
	
	//With this code the hidden class is always removed, but
	//what if we want to remove the hidden class IF it is present,
	//otherwise, add it back!
	
	if (desc.classList.contains('hidden')) {
		desc.classList.remove('hidden');
	} else {
		desc.classList.add('hidden');
	}
	
	// achieve the same result using using string functions
	/*
	// using string methods
	if (desc.className.indexOf('hidden') >= 0) {
		desc.classList.remove('hidden');
	} else {
		desc.classList.add('hidden');
	}
	*/
}