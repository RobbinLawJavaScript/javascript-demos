document.querySelector('[name=toggle]').addEventListener('change', function (evt) {
    console.log('toggle changed...');
    let checks = document.querySelectorAll('[name=message]');
    console.log(checks);
    let idx = 0;
    while (idx < checks.length) {
        if (evt.target.checked) {
            checks[idx].checked = true;
        } else {
            checks[idx].checked = false;
        }
        //The following are all equivalent.
        //idx = idx + 1;
        //idx += 1;
        idx++;
    }
});
