var targetImage = document.querySelector('.target-image');
var controlsDiv = document.querySelector('.controls');
var currentImage = 0;
var opacity = 1;
var intervalId;
var images = [
	'img/beach1.jpg',
	'img/beach2.jpg',
	'img/beach3.jpg'
];

controlsDiv.addEventListener('click', controlsHandler);
document.addEventListener('keydown', documentHandler);

// image fade out function....
function fadeOut() {
	if (opacity > 0) {
		targetImage.style.opacity = opacity = opacity - 0.05;
		requestAnimationFrame(fadeOut);
	} else {
		// set the image source
		targetImage.src = images[currentImage];
		fadeIn();
	}
}

function fadeIn() {
	if (opacity < 1) {
		targetImage.style.opacity = opacity = opacity + 0.05;
		requestAnimationFrame(fadeIn);
	}
}

function moveSlide(dir) {
	// try to advance the current image
	currentImage += dir;
	// check for before the first, or after the last...
	if (currentImage < 0) {
		currentImage = images.length - 1;
	} else if (currentImage === images.length) {
		currentImage = 0;
	}

	fadeOut();
}

function slideshowProxy() {
	moveSlide(+1);
}

function documentHandler(evt) {
	switch (evt.keyCode) {
		case 39:
			// next image
			moveSlide(+1);
			break;
		case 37:
			// prev image
			moveSlide(-1);
			break;
	}
}

function controlsHandler(evt) {
	// Determine the next index for image to show
	switch (evt.target.className) {
		case 'btn-prev':
			moveSlide(-1);
			break;
		case 'btn-next':
			moveSlide(+1);
			break;
		case 'btn-play':
			intervalId = setInterval(slideshowProxy, 3000);
			evt.target.setAttribute('disabled', 'disabled');
			break;
		case 'btn-pause':
			clearInterval(intervalId);
			evt.target.previousElementSibling.removeAttribute('disabled');
			break;
	}
}

// preload known images
(function (images) {
	var img;
	for (var i = 0; i < images.length; i += 1) {
		img = new Image(); //document.createElement('img');
		img.src = images[i];
	}
}(images));
