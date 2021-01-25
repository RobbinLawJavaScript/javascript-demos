function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
}

function strong(value) {
    return '<strong>' + value + '</strong>';
}

let textToBold = document.querySelector('span.note').innerHTML;
let textBolded = strong(textToBold);
updateInnerHTML('span.note', textBolded);
