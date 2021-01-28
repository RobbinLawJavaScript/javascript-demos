const linksDiv = document.querySelector('.image-links');
console.log('liksDiv = ' + linksDiv);
console.log('liksDiv.innerHTML = ' + linksDiv.innerHTML);

linksDiv.addEventListener('click', imageLinkClickHandler);

function imageLinkClickHandler(evt) {
    const targetImage = document.querySelector('.target-image');
    console.log('targetImage = ' + targetImage);
    console.log(evt);

    //Prevent the default behaviour DOM2
    evt.preventDefault();

    //Relying on context
    targetImage.src = this.href;
    console.log('targetImage.src = ' + targetImage.src);

    //Grabbing href from the event object.
    // targetImage.setAttribute('src', evt.target.href);
    // console.log('targetImage.src = ' + targetImage.src);

    // Prevent the default behaviour DOM0
    //return false;
}