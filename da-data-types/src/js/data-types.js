export function demo() {

// PRIMITIVE TYPES are stored on the stack
// String
const myName = 'John Doe';
console.log(myName);
console.log(typeof myName);
// Number, (integers and radical numbers)
const myAge = 45;
console.log(myAge);
console.log(typeof myAge);
// Boolean
const myBool = true;
console.log(myBool);
console.log(typeof myBool);
// Null
const myNull = null;
console.log(myNull);
// Even though null is a primative type it will show up
// as an object with typeof.
console.log(typeof myNull);
// Undefined
let myUndefined;
console.log(myUndefined);
console.log(typeof myUndefined);
// Symbol (ES6)
const mySymbol = Symbol();
console.log(mySymbol);
console.log(typeof mySymbol);

// REFERENCE TYPES - Objects are stored on the heap
// Array
const myArray = ['Hi', 'Hello'];
console.log(myArray);
console.log(typeof myArray);
// Object literal
const myObjectLiteral = {
  city: 'Edmonton',
  province: 'AB'
}
console.log(myObjectLiteral);
console.log(typeof myObjectLiteral);
// Date
const today = new Date();
console.log(today);
console.log(typeof today);

}