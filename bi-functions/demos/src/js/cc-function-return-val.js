export function demo() {

//Function Scope variables.
let firstName = prompt("What's your first name there stranger?");
let hobby = prompt("What's your favorite hobby");

//this function takes two parameters but returns nothing
//to the caller of the function.
function displayPerson(name, favoriteHobby) {
  let introString = `Hello ${name}, ${favoriteHobby} is your fav hobby`;
  let paragraph = document.querySelector('p#p1');
  //console.log() will LIE TO YOU
  //console.log() will not necessarily log the value the variable had at the time you tried to log it.
  //If you run the code with the debugger it works as expected.
  console.log(paragraph);
  paragraph.innerText = introString;
  console.log(paragraph);
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
let result = add(7.0, 5.0);
document.querySelector('p#p2').innerHTML = `the result is ${result}`;
result = add('7.0','5');
document.querySelector('p#p3').innerHTML = `the result is ${result}`;
result = add('7.0', 8.0);
document.querySelector('p#p4').innerHTML = `the result is ${result}`;

}




