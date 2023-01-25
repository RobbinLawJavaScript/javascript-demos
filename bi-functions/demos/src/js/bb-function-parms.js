export default function Demo() {

//Function Scope variable.
let myName;
myName = prompt('Enter name:');

//Basic function call with one argument, no return value.
//Here we can call the function before it is declared.
greetUser1(myName);

//Basic function declaration with a parameter.
function greetUser1(name) {
	document.querySelector('p.greeting1')
	.innerHTML = `Good morning ${name}`;
}

// Functions can be defined in several ways, each with different
// implications.

// Function expressions, using a function in an expression and
// assigning it to a variable. Also demonstrates use of an anonymous
// function (i.e. a function lacking an explicit name).
// The name of the function will be the variable name.
// With Function Expressions we cannot call the function before it is declared.
//greetUser2(myName);
const greetUser2 = function(name) {
	document.querySelector('p.greeting2')
	.innerHTML = `Good afternoon ${name}`;
}
// With Function Expressions we cannot call the function before it is declared.
greetUser2(myName);


// Arrow functions are an ES6 update to the language that allows for a more
// elegant syntax of defining function expressions. The function reserved
// word is dropped in favour of the 'arrow' (=>). Arrow functions also have
// a syntax that implicitly returns a value, something that will be explored
// later on. Otherwise, the function can be used as shown previously. 
const greetUser3 = (name) => {
	document.querySelector('p.greeting3')
	.innerHTML = `Good night ${name}`;
}
// With Function Expressions we cannot call the function before it is declared.
greetUser3(myName);
}
