//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals#Active_learning_Creating_your_own_stopwatch!

export default function End() {

let images = ['img/beach1.jpg', 'img/beach2.jpg', 'img/beach3.jpg']

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
images.forEach((imgUrl) => {
	let img = new Image()
	img.src = imgUrl
})

let currentImage = 0
let slideshowInterval
let playButton

const moveSlide = (dir) => {
	currentImage += dir;
	if (currentImage < 0) {
		currentImage = images.length - 1;
	} else if (currentImage === images.length) {
		currentImage = 0;
	}
	document.querySelector('.target-image').src = images[currentImage];
}

document.querySelector('.controls').addEventListener('click', evt => {
	if (evt.target.className == 'btn-prev') {
		moveSlide(-1)
	} else if (evt.target.className == 'btn-next') {
		moveSlide(+1)
	} else if (evt.target.className == 'btn-play') {
		//https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
		slideshowInterval = setInterval(() => {
			moveSlide(+1)
		}, 3000)
		playButton = evt.target
		playButton.setAttribute('disabled', 'disabled')
	} else if (evt.target.className == 'btn-pause') {
		clearInterval(slideshowInterval);
		playButton.removeAttribute('disabled')
		// Instead of using playButton we could have used the following.
		//evt.target.previousElementSibling.removeAttribute('disabled')
	}
})

document.addEventListener('keydown', function (evt) {
	if (evt.code == 'ArrowLeft') {
		moveSlide(-1)
	} else if (evt.code == 'ArrowRight') {
		moveSlide(+1)
	}
})

}
