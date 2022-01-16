export function demo() {
//This code is provided to you. Do not alter it.
function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
}

//TODO: Put your code here.

function strong(value) {
    return '<strong>' + value + '</strong>';
}

let textToBold = document.querySelector('span.note').innerHTML;
let textBolded = strong(textToBold);
updateInnerHTML('span.note', textBolded);

}
