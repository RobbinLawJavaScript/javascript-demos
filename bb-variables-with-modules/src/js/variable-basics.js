export function demo() {
// JavaScript is a dynamically typed language which means
// the same variable can hold values of different types
// at different times during the running of the program.
// You do NOT have to declare the type of the variable.

// Only characters that can be inside a variable name:
// letters, numbers, _, $
// Can not start with number

// Multi word variables
// var firstName = 'John'; // Camel case
// var FirstName = 'Tom'; // Pascal case
// var first_name = 'Sara'; // Underscore
// var firstname; // not recommended
// var first-name; // nope

// var, let, const

// VAR
var myName;
console.log(myName);
myName = 'Johnny';
console.log(myName);
myName = 123;
console.log(myName);

// LET
let myName3;
console.log(myName3);
myName3 = 'Jim';
console.log(myName3);
myName3 = 123;
console.log(myName3);

// CONST
const myName5 = 'James';
console.log(myName5);
// Can not reassign a constant
//myName5 = 'Sara';
// You have to assign a value to a constant at declaration
//const myName6;

// CONST Array
const numbers = [1,2,3,4,5];
console.log(numbers);
// You can't do this
// numbers = [1,2,3,4,5,6];
// console.log(numbers);
// but you can mutate it with
numbers.push(6);
console.log(numbers);

// CONST Literal Object
const person = {
  name: 'John',
  age: 30
}
console.log(person);

// You cannot reassign the whole literal object when it is a const
// person = {
//   name: 'Jim',
//   age: 35
// }
// console.log(person);

// You can reassign the value of a key
person.name = 'Sara';
person.age = 32;
console.log(person);

}