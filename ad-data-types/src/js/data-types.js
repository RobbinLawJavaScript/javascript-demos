export function demo() {

// PRIMITIVE TYPES
// String
const myName = 'John Doe';
console.log(myName);
console.log(typeof myName);
// Number
const age = 45;
console.log(age);
console.log(typeof age);
// Boolean
const hasKids = true;
console.log(hasKids);
console.log(typeof hasKids);
// Null Object
const car = null;
console.log(car);
console.log(typeof car);
// Undefined
let test;
console.log(test);
console.log(typeof test);
// Symbol
const sym = Symbol();
console.log(sym);
console.log(typeof sym);

// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
console.log(hobbies);
console.log(typeof hobbies);
// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
console.log(address);
console.log(typeof address);
// Date
const today = new Date();
console.log(today);
console.log(typeof today);

}