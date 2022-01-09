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
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname; // not recommended

// var, let, const

// VAR
var myName;
console.log(myName);
myName = 'John';
console.log(myName);
var myName2 = 'Jane';
console.log(myName2);

// LET
let myName3;
console.log(myName3);
myName3 = 'Jim';
console.log(myName3);
let myName4 = 'Jill';
console.log(myName4);

// CONST
const myName5 = 'James';
console.log(myName5);
// Can not reassign
//myName5 = 'Sara';
// Have to assign a value at declaration
//const myName6;

// CONST Literal Object
const person = {
  name: 'John',
  age: 30
}
console.log(person);
// You can reassign but be careful
// person.name = 'Sara';
// person.age = 32;
// console.log(person);

// CONST Array
const numbers = [1,2,3,4,5];
console.log(numbers);
// You can't do this
//numbers = [1,2,3,4,5,6]
// but you can mutate it with
numbers.push(6);
console.log(numbers);

}