function End(){

let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImage = 0;
document.querySelector('.carousel>img').src = `./img/${images[0]}`; 

//Add the appropriate number of selector bullets to the image-tracker
let imageTracker = document.querySelector('.image-tracker');
for (let idx = 0; idx < images.length; idx += 1) {
    imageTracker.innerHTML += '<span class="control">&bull;</span>';
}
//Highlight the first selector bullet as 'active'
imageTracker.querySelector('span').classList.add('active');

document.querySelector('.carousel').addEventListener('click', function (evt){
    if (evt.target.className == 'control prev') {
        moveSlide(-1);
    } else if (evt.target.className == 'control next'){
        moveSlide(+1);
    }   
});

document.addEventListener('keydown', function (evt) {
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
	//Update the image to be the new one.
	document.querySelector('.carousel>img').src = `./img/${images[currentImage]}`;
    //Update the old selector bullet to not be active.
    imageTracker.querySelector('span.active').classList.remove('active');
    //Make the new selector bullet to be active.
    imageTracker.querySelectorAll('span')[currentImage].classList.add('active');
}

}

export default End;