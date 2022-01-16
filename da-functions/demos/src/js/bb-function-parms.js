export function demo() {

//Function Scope variable.
let myName;
myName = prompt('Enter name:');

//Basic function call with one argument, no return value.
//Here we can call the function before it is declared.
greetUser1(myName);

//Basic function declaration with a parameter.
function greetUser1(name) {
    const GREETING = 'Good morning ';
    document.querySelector('p.greeting1').innerHTML = GREETING + name;
}

// Functions can be defined in several ways, each with different
// implications.

// Function expressions, using a function in an expression and
// assigning it to a variable. Also demonstrates use of an anonymous
// function (i.e. a function lacking an explicit name).
// The name of the function will be the variable name.
let greetUser2 = function (name) {
	const GREETING1 = 'Good afternoon ';
    document.querySelector('p.greeting2').innerHTML = GREETING1 + name;
}
//Here with Function Expressions we cannot call the function before it is declared.
greetUser2(myName);

// Arrow functions are an ES6 update to the language that allows for a more
// elegant syntax of defining function expressions. The function reserved
// word is dropped in favour of the 'arrow' (=>). Arrow functions also have
// a syntax that implicitly returns a value, something that will be explored
// later on. Otherwise, the function can be used as shown previously. 
let greetUser3 = (name) => {
	const GREETING2 = 'Good night ';
    document.querySelector('p.greeting3').innerHTML = GREETING2 + name;
}
//Here with Function Expressions we cannot call the function before it is declared.
greetUser3(myName);

}
