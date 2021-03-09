let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;
document.querySelector('.carousel>img').src = 'images/' + images[0]; 

let idx;
let imageTracker = document.querySelector('.image-tracker');
for (idx = 0; idx < images.length; idx += 1) {
    imageTracker.innerHTML += '<span class="control" data-idx="' + idx + '">&bull;</span>';
}

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
            currentImg = parseInt(evt.target.dataset.idx, 10);
        }
        updateSlide(currentImg);
    }
});

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

function updateSlide(index) {
    document.querySelector('.carousel>img').src = 'images/' + images[index];
    document.querySelector('.image-tracker .active').classList.remove('active');     document.querySelectorAll('[data-idx]')[index].classList.add('active');
}

let slideshowInterval;
slideshowInterval = setInterval(function () {
    currentImg += 1;
    if (currentImg == images.length) {
        currentImg = 0;
    }
    updateSlide(currentImg)
}, 3000);