

let count;
let list = '<ul>';

list += '<li>' + 'for loop' + '</li>';
for (count = 0; count < 10; count++) {
	list +='<li>' + (count + 1) + '</li>';
}
list += '<li>' + 'while loop' + '</li>';
count = 0;
while (count < 10) {
	list += '<li>' + (count + 1) + '</li>';
	count++;
}
list += '<li>' + 'do while loop' + '</li>';
count = 0;
do {
	list += '<li>' + (count + 1) + '</li>';
	count++;
} while (count < 10);

list += '</ul>';

// display the list
document.querySelector('.output').innerHTML = list;