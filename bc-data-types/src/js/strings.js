export function demo() {

const firstName = 'Robbin';
const lastName = 'Law';
const age = 46;
const str = 'Hey my name is Robbin';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

val = firstName + 56;

val = firstName + ' ' + lastName;

val = 'Robbin ';
//val = val + 'Law';
val += 'Law';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

val =  "That's awesome, I can't wait";

val = firstName.length;

val = firstName.concat(' ', lastName);

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

val = firstName.indexOf('b');
val = firstName.lastIndexOf('b');

val = firstName.charAt('2');

val = firstName.charAt(firstName.length - 1);

val = firstName.substring(1, 4);

val = firstName.slice(0,4);
val = firstName.slice(-3);

val = str.split(' ');
val = tags.split(',');

val = str.replace('Robbin', 'Jim');

//includes
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
val = 'Hey there Robbin'.includes('here');
val = 'Hey there Robbin'.includes('Hey th');
val = 'Hey there Robbin'.includes('Hey Rob');
val = str.includes('Hey');

console.log(val);

}