document.querySelector('.links').addEventListener('click', function (evt) {
    if (evt.target.tagName == 'A') {
        if (confirm('You are about to leave!') == false) {
            evt.preventDefault();
        }
        // The following can be used in place of line 3 above.
        // The NOT operator (!) 'flips' a boolean value, so
        // !false becomes true.
        // if (!confirm('You are about to leave!')) {
    }
});