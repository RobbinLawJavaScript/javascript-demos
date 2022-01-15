let myname;
myname = prompt('Enter name:');

// functions can be declared with parameters. In the example below,
// greetUser defines a single parameter 'myname'. It's important to
// note that the parameter 'myname' is not the same as the variable
// 'myname' declared on line 1 above. The scope of the function holds
// a local reference to the parameter 'myname', the global 'myname' variable
// is effectively unreachable within the function.
function greetUser(myname) {
    const GREETING = 'Good morning ';
    document.querySelector('.greeting').innerHTML = GREETING + myname;
}
// Functions that define parameters are passed arguments when called.
// Below, the first call will pass the global 'myname' variable's value
// (i.e. whatever was entered in the prompt box) to the greetUser
// functions myname parameter.

greetUser(myname);