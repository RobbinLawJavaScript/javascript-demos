var output = document.querySelector('.output');
var list = '<ul>';
var count; // count the number of list items
var items; // access to list items

// add list items
//count++ is equivalent count += 1 and equivalent to count = count + 1
for (count = 0; count < 10; count = count + 1) {
	list = list + '<li>' + (count + 1) + '</li>';
}

list = list + '</ul>';

// display the list
output.innerHTML = list;

items = document.querySelectorAll('li');

//count += 2 is equivalent to `count = count + 2
for (count = 0; count < items.length; count += 2) {
	items[count].classList.add('stripe');
}
