//
console.log('main.js loaded.')

let timesExecuted = 0;

const countExecution = function() {
  timesExecuted = timesExecuted + 1;
  console.log("function executed: " + timesExecuted + " times");
}

countExecution();

const displayPerson = function(name, favoriteHobby) {
  let introString = " Hello " + name + ", ";
  introString = introString + favoriteHobby + " is your favorite hobby";
  let paragraph = document.querySelector("p");
  paragraph.innerHTML = introString;
}

let firstName = prompt("What's your first name there stranger?");
let hobby = prompt("What's your favorite hobby");

displayPerson(firstName, hobby);

const add = function(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

let result = add(7, 5);

console.log("the result is " + result);

