export function demo() {
//TODO: Put your code here.
let intro = document.querySelector('h2.intro');
console.log('h2.intro.innerHTML = ' + intro.innerHTML);
intro.innerHTML = 'Introduction';
console.log('h2.intro.innerHTML = ' + intro.innerHTML);
}