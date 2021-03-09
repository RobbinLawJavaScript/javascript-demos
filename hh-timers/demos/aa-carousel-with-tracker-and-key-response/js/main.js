//parseInt from modzilla
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;
document.querySelector('.carousel>img').src = 'images/' + images[0]; 

//TODO: add the appropriate number of selector bullets
let idx;
let imageTracker = document.querySelector('.image-tracker');
for (idx = 0; idx < images.length; idx += 1) {
    imageTracker.innerHTML += '<span class="control" data-idx="' + idx + '">&bull;</span>';
}

//TODO: highlight the first selector bullet as 'active'
imageTracker.querySelector('span').classList.add('active');

document.querySelector('.carousel').addEventListener('click', function (evt){
    if (evt.target.classList.contains('control')) {
        if (evt.target.classList.contains('next')) {
            currentImg += 1;
            if (currentImg === images.length) {
                currentImg = 0;
            }
        } else if (evt.target.classList.contains('prev')){
            currentImg -= 1;
            if (currentImg === -1) {
                currentImg = images.length - 1;
            }
        } else {
        	//TODO: selector bullet must have been clicked
            //The idx is a string so we must convert to an int.
            currentImg = parseInt(evt.target.dataset.idx, 10);
            //Can convert this way as well.
    		//currentImg = Number(evt.target.dataset.idx);
        }
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

        //TODO: update the active selector bullet
        imageTracker.querySelector('span.active').classList.remove('active');
        imageTracker.querySelectorAll('span')[currentImg].classList.add('active');
    }
});

//TODO: Add an EventListener here to respond to left and right arrow key presses
//to operate carousel.
document.addEventListener('keydown', function (evt) {
    var click;
    console.log('hi');

    switch (evt.key) {
        case "ArrowLeft":
            // left arrow
            click = new MouseEvent('click', {
                'bubbles': true
            });
            document.querySelector('.prev').dispatchEvent(click);
            break;
        case "ArrowRight":
            // right arrow
            click = new MouseEvent('click', {
                'bubbles': true
            });
            document.querySelector('.next').dispatchEvent(click);
            break;
    }
});