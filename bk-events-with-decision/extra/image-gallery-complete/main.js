document.querySelector('.image-links')
.addEventListener('click', (evt) => {
    const targetImage = document.querySelector('.target-image');
    // Prevent the default behavior which
    // would be to load the image in a new tab of the browser.
    evt.preventDefault();
    //Grabbing href from the event object.
    //targetImage.src = evt.target.href;
    targetImage.setAttribute('src', evt.target.href);
});