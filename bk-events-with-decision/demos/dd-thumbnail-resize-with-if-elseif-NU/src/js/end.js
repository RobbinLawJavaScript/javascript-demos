export function demo() {
//TODO:
//When a gallery thumbnail size button is clicked, 
//the corresponding size class
//should be added to the div.thumbnails element.
//This will apply the corresponding CSS rule to  
//modify the display of the thumbnail images.
//In addition to this, the clicked button should be 
//made active (i.e. add the active class).

const liSm = document.querySelector('.list-item-thumbnails-sm');
const liMd = document.querySelector('.list-item-thumbnails-md');
const liLg = document.querySelector('.list-item-thumbnails-lg');

liSm.addEventListener('click', thumbnailSizeHandler);
liMd.addEventListener('click', thumbnailSizeHandler);
liLg.addEventListener('click', thumbnailSizeHandler);

function thumbnailSizeHandler(e) {
	const thumbnails = document.querySelector('div.thumbnails');

	if (e.target.classList.contains('active') != true) {
		// update the active li
		document.querySelector('li.active').classList.remove('active');
		e.target.classList.add('active');
		if (e.target.classList.contains('list-item-thumbnails-sm')) {
			thumbnails.classList.remove('md');
			thumbnails.classList.remove('lg');
			thumbnails.classList.add('sm');
		} else if (e.target.classList.contains('list-item-thumbnails-md')) {
			thumbnails.classList.remove('sm');
			thumbnails.classList.remove('lg');
			thumbnails.classList.add('md');
		} else {
			thumbnails.classList.remove('sm');
			thumbnails.classList.remove('md');
			thumbnails.classList.add('lg');
		}
	}
}

}
