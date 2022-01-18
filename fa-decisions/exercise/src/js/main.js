export function demo() {
var featureLink = document.querySelector('a.feature');
featureLink.addEventListener('click', featureLinkHandler);
function featureLinkHandler(evt) {
    var featureImage = document.querySelector('img.feature');
    //TODO: 
    //Change this code to include decision by adding an if and else
    //as per the specs.
    featureImage.src = featureLink.href;
    featureImage.classList.remove('hidden');
    evt.preventDefault();
}

}