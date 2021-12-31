
// TASK: prompt for individual names and add them to 
// a list.  Confirm after each name is entered
// whether the user would like to enter another
// name or not.

var list = '<ul>';

do {
	list += '<li>' + prompt('Enter name:') + '</li>';
} while (confirm('Another name?'));

list += '</ul>';
document.querySelector('.output').innerHTML = list;