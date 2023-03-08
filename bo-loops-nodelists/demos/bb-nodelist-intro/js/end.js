export default function End(){

let count;
let items;
let list = `<ul>`;
for (count = 0; count < 10; count++) {
	list += `<li>${count + 1}</li>`;
}
list += `</ul>`;

const output = document.querySelector('#output');
output.insertAdjacentHTML('beforeend', list);

items = document.querySelectorAll('li');
console.log(items);

for (count = 0; count < items.length; count += 2) {
	items[count].classList.add('stripe');
}

}
