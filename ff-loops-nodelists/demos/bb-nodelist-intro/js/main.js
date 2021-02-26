let list = '<ul>';
let count; // count the number of list items
let items; // access to list items

// add list items
//count++ is equivalent count += 1 and equivalent to count = count + 1
for (count = 0; count < 10; count++) {
	list = list + '<li>' + (count + 1) + '</li>';
}

list = list + '</ul>';

// display the list
document.querySelector('.output').innerHTML = list;

items = document.querySelectorAll('li');

//count += 2 is equivalent to `count = count + 2
for (count = 0; count < items.length; count += 2) {
	items[count].classList.add('stripe');
}
