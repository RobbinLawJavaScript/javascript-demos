export function demo() {
var featureLink = document.querySelector('a.feature');
featureLink.addEventListener('click', featureLinkHandler);
function featureLinkHandler(evt) {
    var featureImage = document.querySelector('img.feature');
    //TODO: 
    //Change this code to include decision by adding an if and else
    //as per the specs.
    //if(featureImage.classList.contains('hidden') === true){}
    if(featureImage.classList.contains('hidden')) {
        featureImage.src = featureLink.href;
        featureImage.classList.remove('hidden');
    } else {
        featureImage.src = '';
        featureImage.classList.add('hidden');
    }
    evt.preventDefault();
}

}