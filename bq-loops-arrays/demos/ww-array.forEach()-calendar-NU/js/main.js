// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

export default function Demo(){
	let days = [
		'Sun',
		'Mon',
		'Tue',
		'Wed',
		'Thu',
		'Fri',
		'Sat'
	];

	const calendar = document.querySelector('#calendar');
	const calendar2 = document.querySelector('#calendar2');

	let cal = `<table border="1"><tr>`;
	for (let idx = 0; idx < days.length; idx++) {
		cal += `<th>${days[idx]}</th>`;
	}
	cal += `</tr></table>`;

	calendar.insertAdjacentHTML('beforeend', cal);

	let cal2 = `<table border="1"><tr>`;
	days.forEach((element)=> {
		cal2 += `<th>${element}</th>`;
	});
	cal2 += `</tr></table>`;

	calendar2.insertAdjacentHTML('beforeend', cal2);
}