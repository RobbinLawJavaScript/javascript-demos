// basic function declaration with no parameters.
function greetUser() {
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