export function demo() {
//This code is provided to you. Do not alter it.

function updateInnerHTML(selector, newValue) {
    selector.innerHTML = newValue;
}

//TODO: Put your code here.

function strong(value) {
    return `<strong>${value}</strong>`;
}
let spanRef = document.querySelector('span.note');
let textToBold = spanRef.innerHTML;

let textBolded = strong(textToBold);
updateInnerHTML(spanRef, textBolded);

//let textBolded = `<strong>${textToBold}</strong>`;
//spanRef.innerHTML = textBolded;

}
