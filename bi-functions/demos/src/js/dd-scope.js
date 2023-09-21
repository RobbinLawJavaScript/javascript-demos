export default function Demo() {

//Function Scope variable.
let myName = `Batman`

//Functions can be declared with parameters. In the example below,
//greetUser1 defines a single parameter 'myName'. 
//It's important to note that the parameter 'myName' 
//is not the same memory location as the variable
//'myName' declared in the function scope. 
function greetUser1(myName) {
    const ref = document.querySelector('.greeting1')
    ref.innerText = `Good morning ${myName}`;
}

//Here we can access both the function scope variable and the local parameter.
function greetUser2(varName) {
    // If we declare a variable called myName here then it
    // will be used on the last statement.
    //const myName = "Bon Levi";
    const ref1 = document.querySelector('.greeting2')
    ref1.innerText = `Good afternoon ${varName}`;
    const ref2 = document.querySelector('.greeting3')
    ref2.innerText = `Good night ${myName}`;
}

// Functions that define parameters are passed arguments when called.
// Below, the first call will pass the 'myName' variable's value
// to the functions 'myName' parameter.
greetUser1(myName);
// This call will pass "Jimmy" to the functions varName parameter
// but because there is NO parameter called myName in the function 
// greetUser2, and there is NO variable called myName inside the function,
// myName will become the value of the variable declared and initialized 
// outside of the function. This is called function scope.
greetUser2("Jimmy");
// This call will pass myName variable's value to the greetUser2 function
// parameter called myVar and
// myName in the function will become "Batman" if there is no parameter or variable in the function called myName.
greetUser2(myName);

}
