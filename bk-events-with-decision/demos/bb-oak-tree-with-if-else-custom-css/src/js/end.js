export function Demo() {

const featureImage = document.querySelector('img.feature');
featureImage.addEventListener('click', handleFeatureClick);
function handleFeatureClick() {
	const desc = document.querySelector('p.feature.description');
	if (desc.classList.contains('hidden')) 
		desc.classList.remove('hidden');
	 else 
		desc.classList.add('hidden');
}

}