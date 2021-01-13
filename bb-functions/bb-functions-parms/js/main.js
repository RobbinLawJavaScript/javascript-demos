let myname;
myname = prompt('Enter name:');

//Basic function declaration with a parameter.
function greetUser(name) {
    const GREETING = 'Good morning ';
    document.querySelector('.greeting2').innerHTML = GREETING + name;
}
//Basic function call with one argument.
greetUser(myname);

// Functions can be defined in several ways, each with different
// implications.

// Function expressions, using a function in an expression and
// assigning it to a variable. Also demonstrates use of an anonymous
// function (i.e. a function lacking an explicit name).
let greetUser1 = function (name) {
	const GREETING1 = 'Good afternoon ';
    document.querySelector('.greeting2').innerHTML = GREETING1 + name;
}
//greetUser1(myname);

// Arrow functions are an ES6 update to the language that allows for a more
// elegant syntax of defining functions. The function reserved
// word is dropped in favour of the 'arrow' (=>). Arrow functions also have
// a syntax that implicitly returns a value, something that will be explored
// later on. Otherwise, the function can be used as shown previously. 
let greetUser2 = (name) => {
	const GREETING2 = 'Good night ';
    document.querySelector('.greeting2').innerHTML = GREETING2 + name;
} 
//greetUser2(myname);