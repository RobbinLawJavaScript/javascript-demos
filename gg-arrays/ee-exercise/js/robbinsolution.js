let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;
document.querySelector('.carousel>img').src = 'images/' + images[0];

document.querySelector('.carousel').addEventListener('click', function (evt){
    if (evt.target.classList.contains('control')) {
        console.log('control clicked...');
    }
    if (evt.target.classList.contains('next')) {
        currentImg += 1;
    } else if (evt.target.classList.contains('prev')){
        currentImg -= 1;
    }
    document.querySelector('.carousel>img').src = 'images/' + images[currentImg];
});