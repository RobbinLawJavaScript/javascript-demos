export default function Demo() {
//In JavaScript we can have functions declared and used within a function.
//Notice that for "basic functions" the function can be called
//before it is declared, the declaration will be auto hoisted.

//Calling a basic function with no arguments and no statements does not accomplish anything.
fun();

//This is a basic function declaration/definition with no parameters and no statements.
function fun() {}

//Calling a basic function with no arguments, 
//and no return value, but with statements.
greetUser();

//Basic function declaration/definition with no parameters but with statements.
function greetUser() {
    let myName;
    myName = window.prompt('Enter name:');
    console.log('after prompt but before alert');
    alert(`Good morning ${myName}`);
    console.log('after alert');
}

}

