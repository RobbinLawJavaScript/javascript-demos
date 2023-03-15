export default function End() {

let images = ['./img/beach1.jpg', './img/beach2.jpg', './img/beach3.jpg']

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
images.forEach((imgUrl) => {
	let img = new Image()
	img.src = imgUrl
})

let currentImage = 0;

const moveSlide = (dir) => {
	currentImage += dir
	if (currentImage < 0) {
		currentImage = images.length - 1
	} else if (currentImage === images.length) {
		currentImage = 0
	}
	document.querySelector('.target-image').src = images[currentImage]
}

document.querySelector('#controls').addEventListener('click', (evt) => {
	if (evt.target.className == 'btn-prev') {
		moveSlide(-1);
	} else if (evt.target.className == 'btn-next') {
		moveSlide(+1);
	}
})

//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

document.addEventListener('keydown', (evt) => {
	if (evt.code == 'ArrowLeft') {
		moveSlide(-1)
	} else if (evt.code == 'ArrowRight') {
		moveSlide(+1)
	}
})

}