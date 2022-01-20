export function demo() {

//Function Scope variables.
let firstName = prompt("What's your first name there stranger?");
let hobby = prompt("What's your favorite hobby");

//this function takes two parameters but returns nothing
//to the caller of the function.
function displayPerson(name, favoriteHobby) {
  let introString = `Hello ${name}, ${favoriteHobby} is your fav hobby`;
  let paragraph = document.querySelector('p#p1');
  paragraph.innerHTML = introString;
}

//Calling the function that does not return anything.
displayPerson(firstName, hobby);

//this function takes two parameters and returns
//data to the caller of the function.
function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

//calling the function twice with different data types.
//Also demonstrating coersion.
let result = add(7.0, 5);
document.querySelector('p#p2').innerHTML = `the result is ${result}`;
result = add('7.0','5');
document.querySelector('p#p3').innerHTML = `the result is ${result}`;
result = add('7.0', 5);
document.querySelector('p#p4').innerHTML = `the result is ${result}`;

}




