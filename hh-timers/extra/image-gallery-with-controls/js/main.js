// add the neccessary code to implement the play and pause
// buttons on the page. Clicking play should start an interval
// that will advance through the images every 3 seconds and
// clicking pause should cancel the interval.

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
		// add cases for the play and pause buttons

		// case play: set an interval that will show the next slide

		// case pause: clear the interval set when the play button was clicked
		
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
