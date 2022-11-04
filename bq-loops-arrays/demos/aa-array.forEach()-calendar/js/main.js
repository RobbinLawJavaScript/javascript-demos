// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

export function demo(){
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

	let cal2 = `<table border="1"><tr>`;
	days.forEach((element)=> {
		cal2 += `<th>${element}</th>`;
	});
	cal2 += `</tr></table>`;

	document.querySelector('.calendar2').innerHTML = cal2;
}