var featureLink = document.querySelector('a.feature');
featureLink.addEventListener('click', featureLinkHandler);
function featureLinkHandler(evt) {
    var featureImage = document.querySelector('img.feature');
    featureImage.src = featureLink.href;
    featureImage.classList.remove('hidden');
    evt.preventDefault();
}