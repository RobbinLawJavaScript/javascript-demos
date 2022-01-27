export function demo() {

//TODO: Put your solution here.

//reference the p.city-intro>a element.
const featureLink = document.querySelector('p.city-intro>a');

//Use the debugger in Chrome to see what is happening at each statement.
function featureLinkHandler(e) {
    //preventDefault stops the normal operation of the href in the target element (p.city-intro>a element).
    e.preventDefault();
    //get a reference to the img.feature element.    
    let featureImage = document.querySelector('img.feature');
    //change the src of the img.feature element to be the href of the target element (p.city-intro>a element).     
    featureImage.src = e.target.href;
    //remove the hidden class from the img.feature element.     
    featureImage.classList.remove('hidden');
}

//featureLink.addEventListener('click', featureLinkHandler);

//There are many different events to listen to.
//featureLink.addEventListener('mouseover', featureLinkHandler);
featureLink.addEventListener('mouseout', featureLinkHandler);

}
