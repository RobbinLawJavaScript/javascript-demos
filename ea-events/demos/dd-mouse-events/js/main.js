// Declaring a constant variable to refer to a particular function.
// The function takes a single value (that is, the function has a single parameter)
const reportEvent = function(evt){ // opening curly brace before the "body" of the function
    // it's a good practice nowadays to use the let keyword instead of the var keyword
    // The let keyword makes sure the variable declared exists for this function's block scope only.
    let bubbles = document.querySelector('#evtBubbles');
    let tag = document.querySelector('#evtTag');
    let type = document.querySelector('#evtType');
    // Taking information about the event and putting it inside the labels
    bubbles.innerHTML = evt.bubbles;
    tag.innerHTML = evt.target.tagName;
    type.innerHTML= evt.type;
} // closing curly brace denotes the end of the function

let ref = document.querySelector('section'); 
ref.addEventListener('mouseover', reportEvent); 
ref.addEventListener('mouseout', reportEvent);
ref.addEventListener('mousedown', reportEvent);
ref.addEventListener('mouseup', reportEvent);
ref.addEventListener('click', reportEvent);
ref.addEventListener('dblclick', reportEvent);

// Add an event listener for the dblclick event on the <header> element of this form
//document.querySelector('header').addEventListener('dblclick', reportEvent);
