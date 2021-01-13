//this function takes two parameters but returns nothing
//to the caller of the function.
const displayPerson = function(name, favoriteHobby) {
  let introString = " Hello " + name + ", ";
  introString = introString + favoriteHobby + " is your favorite hobby";
  let paragraph = document.querySelector('p');
  paragraph.innerHTML = introString;
}

let firstName = prompt("What's your first name there stranger?");
let hobby = prompt("What's your favorite hobby");
//calling the function.
displayPerson(firstName, hobby);

//this function takes two parameters and returns
//data to the caller of the function.
const add = function(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

//calling the function twice with different data
//types.
let result = add(7, 5);
console.log("the result is " + result);
result = add('7','8');
console.log("the result is " + result);


