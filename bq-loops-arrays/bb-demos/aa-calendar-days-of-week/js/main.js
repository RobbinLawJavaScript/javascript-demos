
let days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

let cal = `<table border="1"><tr>`;
for (let idx = 0; idx < days.length; idx++) {
    cal += `<th>${days[idx]}</th>`;
}
cal += `</tr></table>`;

document.querySelector('.calendar').innerHTML = cal;