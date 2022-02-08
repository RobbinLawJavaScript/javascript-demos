function End(){

let count;
let items;
let list = `<ul>`;

for (count = 0; count < 10; count++) {
	list += `<li>${count + 1}</li>`;
}

list += `</ul>`;

document.querySelector('.output').innerHTML = list;

items = document.querySelectorAll('li');
console.log(items);

for (count = 0; count < items.length; count += 2) {
	items[count].classList.add('stripe');
}

}

export default End;
