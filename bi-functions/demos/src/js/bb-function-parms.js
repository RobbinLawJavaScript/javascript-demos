export default function Demo() {

// Function Scope variable.
const myName = `Robbin Law`

// Basic function declaration/definition with a parameter but
// no return value.
// With Basic Functions we CAN call the function
// before it is declared/defined.

//greetUser1(myName)
function greetUser1(name) {
	const ref = document.querySelector(`p.greeting1`)
	console.log(`original innerText: ${ref.innerText}`)
	ref.innerText = `Good morning ${name}`
	console.log(`new innerText: ${ref.innerText}`)
}

// With Basic Functions we can call the function before or after
// it is declared/defined.
greetUser1(myName)

// Functions can be defined in several ways, each with different
// implications.

// Function expressions, using a function in an expression and
// assigning it to a variable. Also demonstrates use of an anonymous
// function (i.e. a function lacking an explicit name).
// The name of the function will be the variable name.
// With Function Expressions we cannot call the function 
// before it is declared/defined.

//greetUser2(myName)
const greetUser2 = function(name) {
	const ref = document.querySelector(`p.greeting2`)
	console.log(`original innerText: ${ref.innerText}`)
	ref.innerText = `Good afternoon ${name}`
	console.log(`new innerText: ${ref.innerText}`)
}

// With Function Expressions we cannot call the function before it is declared.
greetUser2(myName)


// Arrow functions are an ES6 update to the language that allows for a more
// elegant syntax of defining function expressions. The function reserved
// word is dropped in favour of the 'arrow' (=>). Arrow functions also have
// a syntax that implicitly returns a value, something that will be explored
// later on. Otherwise, the function can be used as shown previously. 
const greetUser3 = (name) => {
	const ref = document.querySelector(`p.greeting3`)
	console.log(`original innerText: ${ref.innerText}`)
	ref.innerHTML = `Good night ${name}`
	console.log(`new innerText: ${ref.innerText}`)
}
// With Function Expressions we cannot call the function before it is declared.
greetUser3(myName);
}
