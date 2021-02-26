// array of day names
let englishDays = [];
englishDays[0] = 'Sun';
englishDays[1] = 'Mon';
englishDays[2] = 'Tue';
englishDays[3] = 'Wed';
englishDays[4] = 'Thu';
englishDays[5] = 'Fri';
englishDays[6] = 'Sat';
//englishDays[7] = 'ha';

let frenchDays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jun', 'Ven', 'Sam'];

let days;

// ask for language
if (confirm('English? Cancel for French')) {
    days = englishDays;
} else {
    days = frenchDays;
}

// variable for the table, which includes a row for day names
let cal = '<tr>';

for (let idx = 0; idx < days.length; idx += 1) {
    // add each day name to the row
    cal += '<th>' + days[idx] + '</th>';
}

// close the table; ready for display
cal += '</tr>';

document.querySelector('.calendar thead').innerHTML = cal;