export function demo() {

//Function Scope variable.
let myName;
myName = prompt('Enter name:');

//Functions can be declared with parameters. In the example below,
//greetUser1 defines a single parameter 'myName'. 
//It's important to note that the parameter 'myName' 
//is not the same memory location as the variable
//'myName' declared in the function scope. 
function greetUser1(myName) {
    const GREETING = 'Good morning ';
    document.querySelector('.greeting1').innerHTML = GREETING + myName;
}

//Here we can access both the function scope variable and the local parameter.
function greetUser2(varName) {
    const GREETING = 'Good afternoon ';
    document.querySelector('.greeting2').innerHTML = GREETING + myName;
    document.querySelector('.greeting3').innerHTML = GREETING + varName;
}

// Functions that define parameters are passed arguments when called.
// Below, the first call will pass the 'myName' variable's value
// (i.e. whatever was entered in the prompt box) to the greetUser1
// functions 'myName' parameter.
greetUser1(myName);
greetUser2("Jimmy");

}
