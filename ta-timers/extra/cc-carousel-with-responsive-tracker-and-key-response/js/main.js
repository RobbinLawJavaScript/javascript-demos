let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;
document.querySelector('.carousel>img').src = 'images/' + images[0]; 

//Add the appropriate number of selector bullets
let idx;
let imageTracker = document.querySelector('.image-tracker');
for (idx = 0; idx < images.length; idx += 1) {
    imageTracker.innerHTML += '<span class="control" data-idx="' + idx + '">&bull;</span>';
}

//Highlight the first selector bullet as 'active'
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
        	//If it made it to this else a selector bullet must have been clicked
            //The idx is a string so we must convert to an int.
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
            currentImg = parseInt(evt.target.dataset.idx, 10);
            //Can convert this way as well.
    		//currentImg = Number(evt.target.dataset.idx);
        }
        //Update the image to be the new one.
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];
        //Update the old selector bullet to not be active.
        imageTracker.querySelector('span.active').classList.remove('active');
        //Make the new selector bullet to be active.
        imageTracker.querySelectorAll('span')[currentImg].classList.add('active');
        //Could also use this to achieve the same.
        //imageTracker.querySelectorAll('[data-idx]')[currentImg].classList.add('active');
    }
});
//Here we add a keydown event listener that targets the whole document.
//It will respond to left and right arrow key presses
//to operate carousel.
//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
document.addEventListener('keydown', function (evt) {
    var click;
    switch (evt.key) {
        case "ArrowLeft":
            //https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
            click = new MouseEvent('click', {
                'bubbles': true
            });
            //https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
            document.querySelector('.prev').dispatchEvent(click);
            break;
        case "ArrowRight":
            click = new MouseEvent('click', {
                'bubbles': true
            });
            document.querySelector('.next').dispatchEvent(click);
            break;
    }
});