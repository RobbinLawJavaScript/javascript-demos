let myname;
myname = prompt('Enter name:');

// Basic function declaration
function greetUser(name) {
    const GREETING = 'Good afternoon ';

    document.querySelector('.greeting').innerHTML = GREETING + name;
}

// Functions can be defined in several ways, each with different
// implications (to be explored in class and later on).

// Function expression, using a function in an expression and
// assigning it to a variable. Also demonstrates use of an anonymous
// function (i.e. a function lacking an explicit name).
/*
let greetUser = function () {
	const GREETING = 'Good afternoon ';

    document.querySelector('.greeting').innerHTML = GREETING + name;
}
*/

// Arrow functions are an ES6 update to the language that allows for a more
// elegant or succinct syntax of defining functions. The function reserved
// word is dropped in favour of the 'arrow' (=>). Arrow functions also have
// a syntax that implicitly returns a value, something that will be explored
// later on. Otherwise, the function can be used as shown previously. 
/*
let greetUser = () => {
	const GREETING = 'Good afternoon ';

    document.querySelector('.greeting').innerHTML = GREETING + name;
} 
*/

// call this function in the console
//greetUser(name);