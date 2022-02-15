function End(){

let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;
document.querySelector('.carousel>img').src = `./img/${images[0]}`;

document.querySelector('.carousel').addEventListener('click', evt => {
	if (evt.target.classList.contains('control')) {
		if (evt.target.classList.contains('next')) {
			currentImg += 1;
			//Add code here as per the specs
			if (currentImg === images.length)
				currentImg = 0;
		} else if (evt.target.classList.contains('prev')){
			currentImg -= 1;
			//Add code here as per the specs
			if (currentImg === -1)
				currentImg = images.length - 1;
		}
		document.querySelector('.carousel>img').src = `./img/${images[currentImg]}`;
	}
});

}

export default End;