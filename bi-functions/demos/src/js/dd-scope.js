export default function Demo() {

// Global Function Scope Variable.
let myName = `Batman`

// Functions can be declared with parameters.
// In the example below, greetUser1 defines 
// a single parameter 'myName'. 
// It's important to note that the parameter 'myName' 
// is not the same memory location as the variable
// 'myName' declared in the global function scope. 
function greetUser1(myName) {
    const ref = document.querySelector('.greeting1')
    ref.innerText = `Good morning ${myName}`;
}

// Here we access both the local parameter
// and the global function scope variable.
function greetUser2(varName) {
    const ref1 = document.querySelector('.greeting2')
    ref1.innerText = `Good afternoon ${varName}`;
    const ref2 = document.querySelector('.greeting3')
    ref2.innerText = `Good night ${myName}`
}

// Here we access both the local parameter
// but NOT the global function scope variable.
// Instead the LOCAL function variable will be used.
function greetUser3(varName) {
    // If we declare a variable called myName here then it
    // will be used on the last statement.
    const myName = "Bon Levi"
    const ref1 = document.querySelector('.greeting4')
    ref1.innerText = `Good afternoon ${varName}`
    const ref2 = document.querySelector('.greeting5')
    ref2.innerText = `Good night ${myName}`
}

// Functions that define parameters are passed arguments when called.
// Below, the call to greetUser1 will pass the 'myName' global 
// function variable's value
// to the functions 'myName' parameter.
greetUser1(myName)
// This next call will pass 'Jimmy' to the function greetUser2's 
// 'varName' parameter
// but because there is NO parameter called 'myName' in the function 
// greetUser2, and there is NO variable called 'myName' inside the function,
// 'myName' will become the value of the variable declared and initialized 
// outside of the function as the global function variable.
greetUser2('Jimmy')
// This next call will pass 'Johnny' to the greetUser2 function
// parameter called 'myVar' and
// 'myName' in the function will become 'Bon Levi' 
// as a local function variable.
greetUser3('Johnny')

}
