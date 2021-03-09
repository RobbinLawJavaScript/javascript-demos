let targetImage = document.querySelector('.target-image');
let currentImage = 0;
let opacity = 1;
let images = [
	'img/beach1.jpg',
	'img/beach2.jpg',
	'img/beach3.jpg'
];

document.querySelector('.controls').addEventListener('click', function (evt) {
	switch (evt.target.className) {
		case 'btn-prev':
			moveSlide(-1);
			break;
		case 'btn-next':
			moveSlide(+1);
			break;
	}
});

document.addEventListener('keydown', function (evt) {
	switch (evt.code) {
		case 'ArrowRight':
			moveSlide(+1);
			break;
		case 'ArrowLeft':
			moveSlide(-1);
			break;
	}
});

function moveSlide(dir) {
	// try to advance the current image
	currentImage += dir;
	// check for before the first, or after the last...
	if (currentImage < 0) {
		currentImage = images.length - 1;
	} else if (currentImage === images.length) {
		currentImage = 0;
	}
	// fade the current image out
	fadeOut();
}

// image fade out function. Incrementally decreases the opacity until
// it reaches 0
function fadeOut() {
	if (opacity > 0) {
		targetImage.style.opacity = opacity = opacity - 0.05;
		// use the browsers natural animation cycle for efficiency
		requestAnimationFrame(fadeOut);
	} else {
		// set the image source
		targetImage.src = images[currentImage];
		// image is now set, fade the new image into view
		fadeIn();
	}
}

// image fade in function. Incrementally increases the opacity until
// it reaches 1
function fadeIn() {
	if (opacity < 1) {
		targetImage.style.opacity = opacity = opacity + 0.05;
		// use the browsers natural animation cycle for efficiency
		requestAnimationFrame(fadeIn);
	}
}

// preload known images
(function (imgArray) {
	imgArray.forEach(function (imgUrl) {
		let img = new Image();
		img.src = imgUrl;
	});
}(images));
