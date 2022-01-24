export function demo() {

let counter = 0;

const button = document.querySelector('button');
button.addEventListener('click', ButtonClickHandler);
function ButtonClickHandler(){
    counter++;
    const message = document.querySelector('p#p1');
    message.innerHTML = `Button was clicked a ${counter} time.`;
}


// Event listener functions will be passed the
// event object for the event. This object can be
// used to get information about the event and to 
// call methods/functions on the event as well 
// e.g. preventDefault()

const naitLink = document.querySelector('a#a1');
naitLink.addEventListener('click', LinkHandler);
function LinkHandler(evt) {
    if( confirm('Ok to stay on this page, Cancel to leave and go to nait') ) {
        //preventDefault stops the normal operation of the href.
        evt.preventDefault();   
    }    
}


// In the above example, the explicit variable and 
// function are not required as they are not referenced
// more than once. So, we can rewrite the example all in one statement
// using an anonymous arrow function.

document.querySelector('a#a2')
.addEventListener('click', (evt) => {
    if( confirm('Ok to stay on this page, Cancel to leave and go to nhl') ) {
        evt.preventDefault();
    }    
});


const refUl = document.querySelector('ul.links');
console.log(refUl.outerHTML);
console.log(refUl.innerHTML);
refUl.addEventListener('click', ClickHandler);
function ClickHandler(evt) {
    const clickMessage = document.querySelector('p#p2');
    evt.preventDefault();
    if (evt.target.id === 'a3') 
        clickMessage.innerHTML = `you clicked the NAIT link`;
    else if (evt.target.id === 'a4')
        clickMessage.innerHTML = `you clicked the NHL link`;
    else if (evt.target.id === 'h4')
        clickMessage.innerHTML = `you clicked the h4`;
    else if (evt.target.id === 'p2')
        clickMessage.innerHTML = `you clicked the p2`;
    else clickMessage.innerHTML = `you clicked the parent ul`;
}

let refSection = document.querySelector('section.mouse-tricks'); 
refSection.addEventListener('mouseover', ReportEvent); 
refSection.addEventListener('mouseout', ReportEvent);
refSection.addEventListener('mousedown', ReportEvent);
refSection.addEventListener('mouseup', ReportEvent);
//refSection.addEventListener('click', ReportEvent);
refSection.addEventListener('dblclick', ReportEvent);
function ReportEvent(evt) { 
    let bubbles = document.querySelector('#evtBubbles');
    let tag = document.querySelector('#evtTag');
    let type = document.querySelector('#evtType');
    bubbles.innerHTML = evt.bubbles;
    tag.innerHTML = evt.target.tagName;
    type.innerHTML= evt.type;
}


}