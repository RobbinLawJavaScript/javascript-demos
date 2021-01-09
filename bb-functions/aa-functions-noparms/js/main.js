// basic function declaration with no parameters.
function greetUser() {
    let name;
    const GREETING = 'Good afternoon ';
    console.log('before prompt');
    name = prompt('Enter name:');
    console.log('after prompt');
    console.log('before alert');
    alert(GREETING + name);
    console.log('after alert');
}
//calling the function with no arguments.
greetUser();