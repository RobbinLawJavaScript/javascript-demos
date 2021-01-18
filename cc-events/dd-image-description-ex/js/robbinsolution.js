const featureLink = document.querySelector('p.city-intro>a');
console.log(featureLink);

featureLink.addEventListener('click', featureLinkHandler);

function linkHandler(evt) {
    if( confirm('Ok to stay on this page, Cancel to leave and go to nait') ) {
        //preventDefault stops the normal operation of the href.
        evt.preventDefault();
    }    
}

function featureLinkHandler(evt) {     
    let featureImage = document.querySelector('img.feature');     
    featureImage.src = featureLink.href;     
    featureImage.classList.remove('hidden');
    evt.preventDefault();
}