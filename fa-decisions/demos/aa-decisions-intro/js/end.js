export function demo() {
//TODO:
//With this code the hidden class is always removed, but
//what if we want to remove the hidden class IF it is present,
//otherwise, add it back!

var featureImage = document.querySelector('img.feature');
featureImage.addEventListener('click', handleFeatureClick);
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