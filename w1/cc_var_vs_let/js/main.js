//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

// Previous to ES6, var was the only way to 
// declare a variable. Variables declared in 
// the global scope are added to the global
// object (window in the browser) and all vars
// in a function block or if block var's are hoisted to the top of the 
// function or if
var x = 1;
if (x === 1) {
  var x = 2;
  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 2


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
let y = 1;
if (y === 1) {
  let y = 2;
  console.log(y);
  // expected output: 2
}
console.log(y);
// expected output: 1

