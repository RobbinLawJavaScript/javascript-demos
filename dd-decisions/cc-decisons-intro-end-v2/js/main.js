document.querySelector('img.feature').addEventListener('click', function () {
	var desc = document.querySelector('p.feature.description');

	if (desc.classList.contains('hidden')) {
		desc.classList.remove('hidden');
	} else {
		desc.classList.add('hidden');
	}
});