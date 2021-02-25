// array of day names
let days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

// variable for the table, which includes a row for day names
let cal = '<table border="1"><tr>';

for (let idx = 0; idx < days.length; idx++) {
    // add each day name to the row
    cal += '<th>' + days[idx] + '</th>';
}

// close the table; ready for display
cal += '</tr></table>';

document.querySelector('.calendar').innerHTML = cal;