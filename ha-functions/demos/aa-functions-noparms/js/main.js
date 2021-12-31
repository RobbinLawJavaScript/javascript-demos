// basic function declaration with no parameters.
function greetUser() {
    // Both let and const do not add identifiers
    // to the global scope as they are both block-
    // scoped (rather than function-scoped like var).
    // Variables declared with const cannot be reassigned.
    let myname;
    const GREETING = 'Good afternoon ';
    myname = prompt('Enter name:');
    console.log('after prompt but before alert');
    alert(GREETING + myname);
    console.log('after alert');
}
//calling the function with no arguments.
greetUser();

//this is a function with no parameters and no statements.
function fun() {}
//calling this function of course does not accomplish anything.
fun();