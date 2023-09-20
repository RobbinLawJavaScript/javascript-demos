export default function Demo() {
//In JavaScript we can have functions declared and used within another function.

//This is a basic function declaration/definition with no parameters and no statements.
function fun() {}

//Calling a basic function with no arguments and no statements does not accomplish anything.
fun()

//Basic function declaration/definition with no parameters but with statements.
function greetUser() {
    const myName = `Robbin Law`
    const ref = document.querySelector('p.greeting1')
    console.log(`original innerText: ${ref.innerText}`)
	ref.innerText = `Good morning ${myName}`;
    console.log(`new innerText: ${ref.innerText}`)
}

//Calling a basic function with no arguments, 
//and no return value, but with statements.
greetUser()

}

