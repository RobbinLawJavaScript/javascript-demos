

let count;
let list = '<ul>';

list += '<li>' + 'for loop' + '</li>';
for (count = 0; count < 5; count++) {
	list +='<li>' + (count + 1) + '</li>';
}
list += '<li>' + 'while loop' + '</li>';
count = 0;
while (count < 5) {
	list += '<li>' + (count + 1) + '</li>';
	count++;
}
list += '<li>' + 'do while loop' + '</li>';
count = 0;
do {
	list += '<li>' + (count + 1) + '</li>';
	count++;
} while (count < 5);

list += '</ul>';

// display the list
document.querySelector('.output').innerHTML = list;