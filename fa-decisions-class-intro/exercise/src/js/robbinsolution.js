export class UI {
    
ListenForClick(){
    const featureLink = document.querySelector('a.feature');
    featureLink.addEventListener('click', ClickHandler);
    function ClickHandler(evt) {
        const featureImage = document.querySelector('img.feature');
        evt.preventDefault();
        //TODO: 
        //Change this code to include decision by adding an if and else
        //as per the specs.
        //if(featureImage.classList.contains('hidden') === true){}
        if(featureImage.classList.contains('hidden')) {
            featureImage.src = evt.target.href;
            featureImage.classList.remove('hidden');
            evt.target.innerHTML = `Hide Barcelona`;
        } else {
            featureImage.src = '';
            featureImage.classList.add('hidden');
            evt.target.innerHTML = `View Barcelona`;
        }
        }
}

}