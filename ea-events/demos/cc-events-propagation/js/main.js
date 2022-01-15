let ref = document.querySelector('ul.links');
console.log(ref.outerHTML);
console.log(ref.innerHTML);
ref.addEventListener('click', function (evt) {
    if (evt.target.tagName === 'A') {
        if (confirm('Do you want to stay?')) {
            evt.preventDefault();
        }
        // The following can be used in place of line 3 above.
        // The NOT operator (!) 'flips' a boolean value, so
        // !false becomes true.
        // if (!confirm('Do you want to go to new page?')) {
    }
});
