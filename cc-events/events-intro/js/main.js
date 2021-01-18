//select the button element and attach to the variable called "button".
let button = document.querySelector('button');

//add a "click" event listener to the button variable.
button.addEventListener('click', clickHandler);

//the click event handler that will run when the button is pressed.
function clickHandler() {
    console.log('Button was clicked...');
}

