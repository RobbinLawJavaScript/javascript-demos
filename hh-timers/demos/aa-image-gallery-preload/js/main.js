let currentImage = 0;
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
//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
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
	currentImage += dir;
	if (currentImage < 0) {
		currentImage = images.length - 1;
	} else if (currentImage === images.length) {
		currentImage = 0;
	}
	document.querySelector('.target-image').src = images[currentImage];
}

// Preload known images
// The following is a demonstration of an immediately 
// invoked function expression (IIFE).
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE 
(function (imgArray) {
	imgArray.forEach(function (imgUrl) {
		//https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
		let img = new Image();
		img.src = imgUrl;
	});
	// The previous [].forEach() call effectively replaces this,
	// see the following link for more:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 

	// for(let idx = 0; idx < imgArray.length; idx += 1) {
	// 	let img = new Image();
	// 	img.src = imgArray[idx];
	// }
}(images));