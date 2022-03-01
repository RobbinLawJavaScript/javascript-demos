function End() {

let images = ['./img/beach1.jpg', './img/beach2.jpg', './img/beach3.jpg'];
let currentImage = 0;

document.querySelector('.controls').addEventListener('click', evt => {
	if (evt.target.className == 'btn-prev') {
		moveSlide(-1);
	} else if (evt.target.className == 'btn-next') {
		moveSlide(+1);
	}
});

//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

document.addEventListener('keydown', evt => {
	if (evt.code == 'ArrowLeft') {
		moveSlide(-1);
	} else if (evt.code == 'ArrowRight') {
		moveSlide(+1);
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

	// for(let idx = 0; idx < imgArray.length; idx++) {
	// 	let img = new Image();
	// 	img.src = imgArray[idx];
	// }
}(images));

}

export default End;