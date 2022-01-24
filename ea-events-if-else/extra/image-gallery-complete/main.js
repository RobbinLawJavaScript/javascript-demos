document.querySelector('.image-links')
.addEventListener('click', function (evt) {
    const targetImage = document.querySelector('.target-image');
    //Prevent the default behaviour DOM2
    evt.preventDefault();
    //Grabbing href from the event object.
    //targetImage.src = evt.target.href;
    targetImage.setAttribute('src', evt.target.href);
});