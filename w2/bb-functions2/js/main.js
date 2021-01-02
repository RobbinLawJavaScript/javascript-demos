// basic function declaration
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
// call this function in the script.
greetUser();