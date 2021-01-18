let naitLink = document.querySelector('a#a1');

naitLink.addEventListener('click', linkHandler);

// Event listener functions will be passed the
// event object for the event. This object can be
// used to get information about the event and to 
// call methods/functions on the event as well 
// e.g. preventDefault()
function linkHandler(evt) {
    if( confirm('Ok to stay on this page, Cancel to leave and go to nait') ) {
        evt.preventDefault();
    }    
}


// In the above example, the explicit variable and 
// function are not required as they are not referenced
// more than once. So, we can rewrite the example as:

document.querySelector('a#a2').addEventListener('click', function (evt) {
    if( confirm('Ok to stay, Cancel to leave') ) {
        evt.preventDefault();
    }    
});
