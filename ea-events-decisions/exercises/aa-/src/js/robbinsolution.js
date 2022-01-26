export function demo() {

//TODO: Put your solution here.

function CityIntroAHandler1(e) {
    if( confirm('Ok to stay on this page, Cancel to go to img page') ) {
        //preventDefault stops the normal operation of the href.
        e.preventDefault();
    }    
}

//Use the debugger in Chrome to see what is happening at each statement.
function CityIntroAHandler2(e) {
    //preventDefault stops the normal operation of the href in the target element (p.city-intro>a element).
    e.preventDefault();
    //get a reference to the img.feature element.    
    let imgFeature = document.querySelector('img.feature');
    //change the src of the img.feature element to be the href of the target element (p.city-intro>a element).     
    imgFeature.src = e.target.href;
    //remove the hidden class from the img.feature element.     
    imgFeature.classList.remove('hidden');
}

//reference the p.city-intro>a element and add a click listener to it.

const refAnchor = document.querySelector('p.city-intro>a');

//refAnchor.addEventListener('click', CityIntroAHandler1);
refAnchor.addEventListener('click', CityIntroAHandler2);

//There are many different events to listen to.
//refAnchor.addEventListener('mouseover', CityIntroAHandler2);
//refAnchor.addEventListener('mouseout', CityIntroAHandler2);

}
