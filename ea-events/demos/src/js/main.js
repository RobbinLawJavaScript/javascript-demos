export function demo() {

//select the button element and attach to the variable called "button".
let button = document.querySelector('button');
let message = document.querySelector('p#p1');
let counter = 0;

//add a "click" event listener to the button variable.
button.addEventListener('click', ButtonClickHandler);

//the click event handler that will run when the button is pressed.
function ButtonClickHandler() {
    counter++;
    message.innerHTML = `Button was clicked a ${counter} time.`;
}

let naitLink = document.querySelector('a#a1');

naitLink.addEventListener('click', linkHandler);

// Event listener functions will be passed the
// event object for the event. This object can be
// used to get information about the event and to 
// call methods/functions on the event as well 
// e.g. preventDefault()

function linkHandler(evt) {
    if( confirm('Ok to stay on this page, Cancel to leave and go to nait') ) {
        //preventDefault stops the normal operation of the href.
        evt.preventDefault();
        
    }    
}

// In the above example, the explicit variable and 
// function are not required as they are not referenced
// more than once. So, we can rewrite the example all in one statement.

document.querySelector('a#a2')
.addEventListener('click', function (evt) {
    if( confirm('Ok to stay on this page, Cancel to leave and go to nhl') ) {
        evt.preventDefault();
    }    
});

let ref = document.querySelector('ul.links');
let clickMessage = document.querySelector('p#p2');
console.log(ref.outerHTML);
console.log(ref.innerHTML);

ref.addEventListener('click', clickHandler);

function clickHandler(evt) {
    evt.preventDefault();
    if (evt.target.id === 'a3') 
        clickMessage.innerHTML = `you clicked the NAIT link`;
    else if (evt.target.id === 'a4')
        clickMessage.innerHTML = `you clicked the NHL link`;
    else if (evt.target.id === 'h1')
        clickMessage.innerHTML = `you clicked the h1`;

        

    

}

}