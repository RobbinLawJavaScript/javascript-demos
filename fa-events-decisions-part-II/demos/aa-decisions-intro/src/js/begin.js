export function demo() {
//TODO:
//With this code the hidden class is always removed, but
//what if we want to remove the hidden class IF it is present,
//otherwise, add it back!
	
const featureImage = document.querySelector('img.feature');
featureImage.addEventListener('click', handleFeatureClick);
function handleFeatureClick() {
	const desc = document.querySelector('p.feature.description');
	//TODO: Change the code here
	desc.classList.remove('hidden');
}

}