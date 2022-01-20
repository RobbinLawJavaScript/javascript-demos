export function demo() {
    let featureLink = document.querySelector('a.feature');
    function FeatureLinkHandler(evt) {
        let featureImage = document.querySelector('img.feature');
    //TODO: 
    //Change this code to include decision by adding an if and else
    //as per the specs.
    featureImage.src = featureLink.href;
    featureImage.classList.remove('hidden');
    featureLink.innerHTML = `Hide Barcelona`;
    evt.preventDefault();
}
featureLink.addEventListener('click', FeatureLinkHandler);

}