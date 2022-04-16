//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

//calculating last day of month Stack Overflow
//https://stackoverflow.com/questions/222309/calculate-last-day-of-month-in-javascript
function End(){

	const days = [
		'Sun',
		'Mon',
		'Tue',
		'Wed',
		'Thu',
		'Fri',
		'Sat'
	];

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	function getCalendar(year, month) {
		let cal = '';
		//Setting the day to 1
		//gives the first of this month.
		const firstDay = new Date(year, month, 1);
		//Setting the month to the next month and day to 0
		//gives the day before the first of the next month
		//which is the last day of this month.
		//See Stack Overflow article above.
		const lastDay = new Date(year, month + 1, 0); 
		// counter for the day loop
		let day;
		// counter for blank days (if any)
		let blank = 0;

		cal += `<h2>${months[month]}, ${year}</h2>`;
		cal += `<table class="calendar">`;
		cal += `<tr>`;
		// include day names
		for (day = 0; day < days.length; day++) {
			cal += `<th>${days[day]}</th>`;
		}
		cal += `</tr>`;
		cal += `<tr>`;
		// determine the first day of the week to leave empty days
		for (day = 0; day < lastDay.getDate(); day++) {
			//The first days may be blank, 
			//depending on what the first day of the month is.
			if (day < firstDay.getDay() && !blank) {
				for (blank = 0; blank < firstDay.getDay(); blank += 1)
					cal += '<td></td>';
			}
			cal += `<td>${day + 1}</td>`;
			// if it's the end of the week (7 days), then close the current row
			if ((day + blank + 1) % 7=== 0) {
				cal += `</tr>`;
				// begin a new row if not the end of the month
				if (day < lastDay.getDate() + 1)
					cal += `<tr>`;
			}
		}
		return cal += `</table>`;
	}

	// display the calendar in the desired element
	document.querySelector('.display').innerHTML = getCalendar(2022, 0);
	document.querySelector('.display').innerHTML += getCalendar((new Date()).getFullYear(), (new Date()).getMonth());

}

export default End;